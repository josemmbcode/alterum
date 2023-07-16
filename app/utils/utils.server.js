export async function getProductInformation(request){
    const formData = await request.formData();
    const productData = Object.fromEntries(formData);
    return productData
  }