
export const fetchRecommendedProduct = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/getRecommendation');
      if (!response.ok) {
        throw new Error('Failed to fetch recommended products');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching recommended products: ${error.message}`);
    }
  };
  export const fetchSliderView = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/getImgCircle');
      if (!response.ok) {
        throw new Error('Failed to fetch slider');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching slider: ${error.message}`);
    }
  };
  