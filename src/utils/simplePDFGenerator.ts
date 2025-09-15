import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFOptions {
  filename?: string;
  quality?: number;
}

export const generateSimplePDF = async (
  elementId: string, 
  options: PDFOptions = {}
): Promise<void> => {
  const {
    filename = 'Zhi-Xu_Li_Resume.pdf',
    quality = 0.8
  } = options;

  try {
    // 獲取要轉換的元素
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    // 臨時顯示元素
    const originalStyle = {
      position: element.style.position,
      left: element.style.left,
      top: element.style.top,
      visibility: element.style.visibility,
      display: element.style.display,
      width: element.style.width,
      height: element.style.height,
      backgroundColor: element.style.backgroundColor,
      zIndex: element.style.zIndex
    };

    // 設置元素為可見
    element.style.position = 'fixed';
    element.style.left = '0';
    element.style.top = '0';
    element.style.visibility = 'visible';
    element.style.display = 'block';
    element.style.width = '210mm';
    element.style.height = 'auto';
    element.style.backgroundColor = '#ffffff';
    element.style.zIndex = '9999';

    // 等待渲染
    await new Promise(resolve => setTimeout(resolve, 500));

    // 生成 canvas
    const canvas = await html2canvas(element, {
      scale: 1,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.offsetWidth,
      height: element.offsetHeight,
      foreignObjectRendering: false,
      removeContainer: false,
      imageTimeout: 10000,
    });

    // 恢復原始樣式
    Object.assign(element.style, originalStyle);

    // 檢查 canvas
    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      throw new Error('Failed to generate canvas');
    }

    // 創建 PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // 轉換為 JPEG 格式
    const imgData = canvas.toDataURL('image/jpeg', quality);
    
    if (!imgData || imgData === 'data:,') {
      throw new Error('Failed to generate image data');
    }

    // 添加圖片到 PDF
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

    // 如果內容超過一頁
    let heightLeft = imgHeight;
    let position = 0;

    while (heightLeft >= pageHeight) {
      position = heightLeft - pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, -position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // 下載 PDF
    pdf.save(filename);

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
