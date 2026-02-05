document.addEventListener('DOMContentLoaded', () => {
    const horoscopeSelect = document.getElementById('horoscope-select');
    const getLuckyColourBtn = document.getElementById('get-lucky-colour-btn');
    const resultContainer = document.getElementById('result-container');

    const luckyHoroscopeData = {
        aries: {
            color: 'Red',
            explanation: 'Red symbolizes passion and energy, bringing you good fortune and courage to tackle challenges today.'
        },
        taurus: {
            color: 'Green',
            explanation: 'Green represents growth and harmony, promoting stability and prosperity in your endeavors.'
        },
        gemini: {
            color: 'Yellow',
            explanation: 'Yellow signifies joy and intellect, enhancing your communication and bringing bright ideas.'
        },
        cancer: {
            color: 'Silver',
            explanation: 'Silver reflects intuition and emotional balance, guiding you through the day with peace and clarity.'
        },
        leo: {
            color: 'Gold',
            explanation: 'Gold denotes success and generosity, amplifying your confidence and leadership qualities.'
        },
        virgo: {
            color: 'Navy Blue',
            explanation: 'Navy Blue represents wisdom and efficiency, supporting your analytical skills and attention to detail.'
        },
        libra: {
            color: 'Pink',
            explanation: 'Pink symbolizes love and partnership, fostering harmonious relationships and aesthetic appreciation.'
        },
        scorpio: {
            color: 'Black',
            explanation: 'Black signifies transformation and depth, empowering you with resilience and intense focus.'
        },
        sagittarius: {
            color: 'Purple',
            explanation: 'Purple inspires spirituality and adventure, broadening your horizons and bringing good luck on journeys.'
        },
        capricorn: {
            color: 'Brown',
            explanation: 'Brown indicates stability and practicality, grounding your efforts and helping you build solid foundations.'
        },
        aquarius: {
            color: 'Electric Blue',
            explanation: 'Electric Blue stands for innovation and freedom, sparking new ideas and connecting you with like-minded individuals.'
        },
        pisces: {
            color: 'Sea Green',
            explanation: 'Sea Green embodies healing and compassion, enhancing your empathy and creative flow.'
        }
    };

    getLuckyColourBtn.addEventListener('click', () => {
        const selectedHoroscope = horoscopeSelect.value;
        if (selectedHoroscope && luckyHoroscopeData[selectedHoroscope]) {
            displayLuckyColour(selectedHoroscope, luckyHoroscopeData[selectedHoroscope]);
        } else {
            resultContainer.innerHTML = '<p>Please select your horoscope.</p>';
        }
    });

    function displayLuckyColour(horoscope, data) {
        resultContainer.innerHTML = `
            <h3>Lucky Colour for ${horoscope.charAt(0).toUpperCase() + horoscope.slice(1)}</h3>
            <p><strong>Colour:</strong> <span style="color: ${data.color.toLowerCase()};">${data.color}</span></p>
            <p><strong>Explanation:</strong> ${data.explanation}</p>
        `;
    }
});