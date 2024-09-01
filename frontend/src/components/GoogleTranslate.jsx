import React, { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        // Check if the script is already added to prevent duplication
        if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
            const addScript = document.createElement('script');
            addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(addScript);
        }

        // Initialize the Google Translate Element
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT },
                'google_translate_element'
            );
        };
    }, []);

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
