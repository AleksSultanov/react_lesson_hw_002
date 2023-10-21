document.addEventListener("DOMContentLoaded",function() {
    const headerMobileButton = document.querySelector(".header__mobile-button");
    const moblieMenu = document.querySelector(".mobile-menu");
    const headerMobileIcon = document.querySelector(".header__mobile-icon");
    const headerCloseIcon = document.querySelector(".header__close-icon");

    const mobileLoginButton = document.querySelector(".mobile-menu__login-button");
    const body = document.querySelector("body");

   
    const VISIBLE_CLASS = "visible";
    const HIDDEN_CLASS = "hidden";

    function addRemove(element, isAdd, class_name) {
    //    Добавляет, удаляет класс class_name  для элемента  element, в зависимости от isAdd
       if (isAdd) {
        element.classList.add(class_name);
       } else {
        element.classList.remove(class_name); 
       }
    }

    function setVisMenu(visOn) {
        // Функция переключает видимость элементов меню
        addRemove(moblieMenu,visOn,VISIBLE_CLASS);
        addRemove(headerCloseIcon,visOn,VISIBLE_CLASS);
        addRemove(headerMobileIcon,!visOn,VISIBLE_CLASS);
        addRemove(body,visOn,HIDDEN_CLASS);
        
    }

    // Включение\выключение мобильного меню
    headerMobileButton.addEventListener("click",function() {
        const isMoblieMenuVis = moblieMenu.classList.contains(VISIBLE_CLASS);
        setVisMenu(!isMoblieMenuVis);
    });

    // Закрытие мобильного меню по кнопке логин
    mobileLoginButton.addEventListener("click",function() {
        setVisMenu(false);
    });
});