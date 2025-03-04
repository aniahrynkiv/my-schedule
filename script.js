const scheduleData = {
    workday: [
        { time: "7:00 - 7:30", activity: "Прокидання, склянка води" },
        { time: "7:30 - 8:00", activity: "Йога" },
        { time: "8:00 - 8:15", activity: "Догляд за обличчям та волоссям" },
        { time: "8:15 - 8:30", activity: "Прийом ліків, легкий сніданок" },
        { time: "8:30 - 9:00", activity: "Підготовка до роботи" },
        { time: "9:00 - 13:00", activity: "Робота" },
        { time: "13:00 - 14:00", activity: "Обідня перерва, прогулянка" },
        { time: "14:00 - 18:00", activity: "Робота (з перервою на хобі)" },
        { time: "18:00 - 19:00", activity: "Вільний час" },
        { time: "19:00 - 20:00", activity: "Вечеря" },
        { time: "20:00 - 22:00", activity: "Вільний час" },
        { time: "22:00 - 23:00", activity: "Підготовка до сну" },
        { time: "23:00", activity: "Сон" }
    ],
    running: [
        // ... аналогічно для днів бігу
    ],
    weekend: [
        // ... аналогічно для вихідних
    ]
};

const tips = [
    "Сон: Намагайтеся лягати спати о 23:00 для повноцінного відпочинку",
    "Харчування: Їжте регулярно тричі на день",
    "Прогулянки: 30 хвилин на свіжому повітрі щодня",
    "Щоденник подяки: Записуйте 3-5 речей, за які ви вдячні",
    "Хобі: Виділяйте час на улюблені заняття щодня"
];

function createScheduleItem(time, activity) {
    return `
        <div class="schedule-item">
            <div class="time">${time}</div>
            <div class="activity">${activity}</div>
        </div>
    `;
}

function displaySchedule(dayType) {
    const container = document.getElementById(dayType);
    container.innerHTML = scheduleData[dayType]
        .map(item => createScheduleItem(item.time, item.activity))
        .join('');
}

function displayTips() {
    const tipsContainer = document.querySelector('.tips-container');
    tipsContainer.innerHTML = tips
        .map(tip => `<div class="tip-item">${tip}</div>`)
        .join('');
}

document.addEventListener('DOMContentLoaded', () => {
    // Показати початковий розклад для робочих днів
    displaySchedule('workday');
    displayTips();

    // Обробка перемикання між типами днів
    document.querySelectorAll('.day-btn').forEach(button => {
        button.addEventListener('click', () => {
            const dayType = button.dataset.day;
            
            // Оновити активну кнопку
            document.querySelectorAll('.day-btn').forEach(btn => 
                btn.classList.remove('active'));
            button.classList.add('active');
            
            // Сховати всі розклади
            document.querySelectorAll('.schedule-container').forEach(container => 
                container.classList.add('hidden'));
            
            // Показати вибраний розклад
            document.getElementById(dayType).classList.remove('hidden');
            displaySchedule(dayType);
        });
    });
});
