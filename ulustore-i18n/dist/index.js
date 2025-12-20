"use strict";
/**
 * @ulustore/i18n - Internationalization
 * ulustore.com üçün çoxdillilik
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonTranslations = exports.LOCALE_NAMES = exports.DEFAULT_LOCALE = exports.SUPPORTED_LOCALES = void 0;
exports.t = t;
exports.isValidLocale = isValidLocale;
exports.formatDateLocale = formatDateLocale;
/**
 * Supported locales
 * Dəstəklənən dillər
 */
exports.SUPPORTED_LOCALES = ['az', 'en', 'ru', 'tr'];
/**
 * Default locale
 * Default dil
 */
exports.DEFAULT_LOCALE = 'az';
/**
 * Locale display names
 * Dil göstərmə adları
 */
exports.LOCALE_NAMES = {
    az: 'Azərbaycan',
    en: 'English',
    ru: 'Русский',
    tr: 'Türkçe',
};
/**
 * Common translations
 * Ümumi tərcümələr
 */
exports.commonTranslations = {
    az: {
        // Navigation / Naviqasiya
        'nav.home': 'Əsas Səhifə',
        'nav.products': 'Məhsullar',
        'nav.categories': 'Kateqoriyalar',
        'nav.cart': 'Səbət',
        'nav.account': 'Hesabım',
        'nav.orders': 'Sifarişlərim',
        'nav.logout': 'Çıxış',
        'nav.login': 'Daxil ol',
        'nav.register': 'Qeydiyyat',
        // Common actions / Ümumi əməliyyatlar
        'action.save': 'Yadda saxla',
        'action.cancel': 'Ləğv et',
        'action.delete': 'Sil',
        'action.edit': 'Redaktə et',
        'action.add': 'Əlavə et',
        'action.search': 'Axtar',
        'action.submit': 'Göndər',
        'action.confirm': 'Təsdiqlə',
        'action.close': 'Bağla',
        // Messages / Mesajlar
        'message.success': 'Uğurlu!',
        'message.error': 'Xəta baş verdi',
        'message.loading': 'Yüklənir...',
        'message.noResults': 'Nəticə tapılmadı',
        // Form / Form
        'form.email': 'Email',
        'form.password': 'Şifrə',
        'form.name': 'Ad',
        'form.phone': 'Telefon',
        'form.required': 'Bu sahə tələb olunur',
    },
    en: {
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.categories': 'Categories',
        'nav.cart': 'Cart',
        'nav.account': 'My Account',
        'nav.orders': 'My Orders',
        'nav.logout': 'Logout',
        'nav.login': 'Login',
        'nav.register': 'Register',
        'action.save': 'Save',
        'action.cancel': 'Cancel',
        'action.delete': 'Delete',
        'action.edit': 'Edit',
        'action.add': 'Add',
        'action.search': 'Search',
        'action.submit': 'Submit',
        'action.confirm': 'Confirm',
        'action.close': 'Close',
        'message.success': 'Success!',
        'message.error': 'An error occurred',
        'message.loading': 'Loading...',
        'message.noResults': 'No results found',
        'form.email': 'Email',
        'form.password': 'Password',
        'form.name': 'Name',
        'form.phone': 'Phone',
        'form.required': 'This field is required',
    },
    ru: {
        'nav.home': 'Главная',
        'nav.products': 'Товары',
        'nav.categories': 'Категории',
        'nav.cart': 'Корзина',
        'nav.account': 'Мой аккаунт',
        'nav.orders': 'Мои заказы',
        'nav.logout': 'Выход',
        'nav.login': 'Войти',
        'nav.register': 'Регистрация',
        'action.save': 'Сохранить',
        'action.cancel': 'Отмена',
        'action.delete': 'Удалить',
        'action.edit': 'Редактировать',
        'action.add': 'Добавить',
        'action.search': 'Поиск',
        'action.submit': 'Отправить',
        'action.confirm': 'Подтвердить',
        'action.close': 'Закрыть',
        'message.success': 'Успешно!',
        'message.error': 'Произошла ошибка',
        'message.loading': 'Загрузка...',
        'message.noResults': 'Результатов не найдено',
        'form.email': 'Email',
        'form.password': 'Пароль',
        'form.name': 'Имя',
        'form.phone': 'Телефон',
        'form.required': 'Это поле обязательно',
    },
    tr: {
        'nav.home': 'Ana Sayfa',
        'nav.products': 'Ürünler',
        'nav.categories': 'Kategoriler',
        'nav.cart': 'Sepet',
        'nav.account': 'Hesabım',
        'nav.orders': 'Siparişlerim',
        'nav.logout': 'Çıkış',
        'nav.login': 'Giriş',
        'nav.register': 'Kayıt',
        'action.save': 'Kaydet',
        'action.cancel': 'İptal',
        'action.delete': 'Sil',
        'action.edit': 'Düzenle',
        'action.add': 'Ekle',
        'action.search': 'Ara',
        'action.submit': 'Gönder',
        'action.confirm': 'Onayla',
        'action.close': 'Kapat',
        'message.success': 'Başarılı!',
        'message.error': 'Bir hata oluştu',
        'message.loading': 'Yükleniyor...',
        'message.noResults': 'Sonuç bulunamadı',
        'form.email': 'E-posta',
        'form.password': 'Şifre',
        'form.name': 'Ad',
        'form.phone': 'Telefon',
        'form.required': 'Bu alan zorunludur',
    },
};
/**
 * Get translation
 * Tərcümə al
 *
 * @param key - Translation key / Tərcümə açarı
 * @param locale - Locale / Dil
 * @returns Translated string / Tərcümə olunmuş string
 */
function t(key, locale = exports.DEFAULT_LOCALE) {
    return exports.commonTranslations[locale]?.[key] || key;
}
/**
 * Check if locale is supported
 * Dilin dəstəkləndiyini yoxla
 *
 * @param locale - Locale to check / Yoxlanacaq dil
 * @returns Whether locale is supported / Dil dəstəklənir ya yox
 */
function isValidLocale(locale) {
    return exports.SUPPORTED_LOCALES.includes(locale);
}
/**
 * Format date for locale
 * Tarixni dil üçün formatla
 *
 * @param date - Date to format / Formatlanacaq tarix
 * @param locale - Locale / Dil
 * @returns Formatted date / Formatlanmış tarix
 */
function formatDateLocale(date, locale = exports.DEFAULT_LOCALE) {
    const d = typeof date === 'string' ? new Date(date) : date;
    const localeMap = {
        az: 'az-AZ',
        en: 'en-US',
        ru: 'ru-RU',
        tr: 'tr-TR',
    };
    return new Intl.DateTimeFormat(localeMap[locale], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(d);
}
