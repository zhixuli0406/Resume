import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFOptions {
  filename?: string;
  quality?: number;
  scale?: number;
}

export const generateResumePDF = async (
  elementId: string, 
  options: PDFOptions = {}
): Promise<void> => {
  const {
    filename = 'Zhi-Xu_Li_Resume.pdf',
    quality = 0.98,
    scale = 1.5
  } = options;

  try {
    // 獲取要轉換的元素
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    // 確保元素可見
    element.style.display = 'block';
    element.style.visibility = 'visible';
    element.style.position = 'static';
    element.style.width = '210mm';
    element.style.maxWidth = '210mm';
    element.style.margin = '0 auto';
    element.style.backgroundColor = '#ffffff';

    // 等待一下讓樣式生效
    await new Promise(resolve => setTimeout(resolve, 100));

    // 創建 canvas
    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
      foreignObjectRendering: true,
      removeContainer: true,
      imageTimeout: 15000,
    });

    // 檢查 canvas 是否有效
    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      throw new Error('Failed to generate canvas from element');
    }

    // 計算 PDF 尺寸
    const imgWidth = 210; // A4 寬度 (mm)
    const pageHeight = 295; // A4 高度 (mm)
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // 創建 PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // 獲取圖片數據
    const imgData = canvas.toDataURL('image/jpeg', quality);
    
    // 檢查圖片數據是否有效
    if (!imgData || imgData === 'data:,') {
      throw new Error('Failed to generate image data from canvas');
    }

    // 如果內容超過一頁，需要分頁處理
    let heightLeft = imgHeight;
    let position = 0;

    // 添加圖片到 PDF
    pdf.addImage(
      imgData,
      'JPEG',
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pageHeight;

    // 如果還有內容，添加新頁面
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(
        imgData,
        'JPEG',
        0,
        position,
        imgWidth,
        imgHeight
      );
      heightLeft -= pageHeight;
    }

    // 下載 PDF
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

export const generateResumePDFFromHTML = async (
  htmlContent: string,
  options: PDFOptions = {}
): Promise<void> => {
  const {
    filename = 'Zhi-Xu_Li_Resume.pdf',
    quality = 0.98,
    scale = 2
  } = options;

  try {
    // 創建臨時容器
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlContent;
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    tempContainer.style.width = '210mm'; // A4 寬度
    tempContainer.style.backgroundColor = '#ffffff';
    tempContainer.style.padding = '20px';
    tempContainer.style.fontFamily = 'Inter, sans-serif';
    
    document.body.appendChild(tempContainer);

    // 生成 canvas
    const canvas = await html2canvas(tempContainer, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    // 清理臨時容器
    document.body.removeChild(tempContainer);

    // 創建 PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(
      canvas.toDataURL('image/png', quality),
      'PNG',
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(
        canvas.toDataURL('image/png', quality),
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight
      );
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF from HTML:', error);
    throw error;
  }
};
