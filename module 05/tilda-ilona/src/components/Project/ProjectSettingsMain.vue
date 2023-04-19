<template>
    <form class="settings-modal__form">
        <div class="settings-modal__form-item">
            <label class="settings-modal__label" for="title">Заголовок</label>
            <input class="settings-modal__input" type="text" id="title" name="title" value="Page" />
        </div>
        <div class="settings-modal__form-item">
            <label class="settings-modal__label" for="description">Описание</label>
            <input class="settings-modal__input" type="text" id="description" name="description" value="Стандартная страница" />
        </div>
        <div class="settings-modal__form-item">
            <label class="settings-modal__label" for="address">Адрес страницы</label>
            <input class="settings-modal__input" type="text" id="address" name="address" value="Адрес страницы"/>
        </div>
        <button class="settings-modal__save">Сохранить изменения</button>
    </form>
</template>