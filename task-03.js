const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
// ==========================================================================================
const imagesList = document.querySelector('#gallery');

const elements = images.map((item) => {   
  const imagesItem = `<li><img  src=${item.url} alt=${item.alt}></li>`;    
  
  return imagesItem;
});

imagesList.insertAdjacentHTML('beforebegin', elements.join(''));
console.log(imagesList);
// =======================================================================

// В переменную elements должен записаться массив шаблонных строк, а не элементов. 
// Т.е. в map нужно создавать и возвращать шаблонную строку с разметкой для каждой фотографии. 
// В этой строке должен быть тег li, а внутри тег img, 
// с подставленным в src значением из объекта item. 
// В map не должно быть insertAdjacentElement, это должно быть уже в конце вместо append