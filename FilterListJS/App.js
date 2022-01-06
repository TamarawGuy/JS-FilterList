const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    const filterValue = filterInput.value.toUpperCase();
    const ul = document.getElementById('names');
    const lis = ul.querySelectorAll('.collection-item');

    for (let i = 0; i < lis.length; i++) {
        const name = lis[i].getElementsByTagName('a')[0].text.toUpperCase();

        if (name.includes(filterValue)) {
            lis[i].style.display = '';
        }
        else {
            lis[i].style.display = 'none';
        }
    }
}