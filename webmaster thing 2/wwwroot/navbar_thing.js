//// -------- STEP 1 -------- //
//const _tabs = document.querySelectorAll('[data-tab]');
//const _content = document.getElementsByClassName('active');

//// -------- STEP 3 -------- //
//const toggleContent = function () {

//    // Part One
//    if (!this.classList.contains("active")) {

//        Array.from(_content).forEach(item => {
//            item.classList.remove('active');
//        });

//        this.classList.add('active');

//        // Part Two
//        let currentTab = this.getAttribute('data-tab'),
//            _tabContent = document.getElementById(currentTab);
//        _tabContent.classList.add('active');
//    }
//};

//// -------- STEP 2 -------- //
//Array.from(_tabs).forEach(item => {
//    item.addEventListener('click', toggleContent);
//});