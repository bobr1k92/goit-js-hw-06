const itemsByClass = document.querySelectorAll('li.item');
console.log('Number of categories:', itemsByClass.length);

itemsByClass.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryNumber = item.querySelectorAll('li').length;
    console.log('Category:', categoryName);
    console.log('Element:', categoryNumber);
});