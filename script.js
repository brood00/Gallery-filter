const btnsFilter = document.querySelectorAll('.btn__filter')
const galleryItems = document.querySelectorAll('.gallery__item')

btnsFilter.forEach((btn) => {
    btn.addEventListener('click', () => {
        const selectedCategory = btn.dataset.category

        galleryItems.forEach((item) => {
            const itemCategory = item.dataset.category

            if (selectedCategory === itemCategory || selectedCategory === 'all') {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
        })

        btnsFilter.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')

    })

})
