// Twemoji CDN base URL - reliable emoji images
const TWEMOJI = (code) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${code}.svg`;

// Helper function to create word entry with generic placeholder images
function createWordEntry(word, chinese, emoji = "📝") {
    return {
        word: word,
        chinese: chinese,
        emoji: emoji,
        images: [
            { url: TWEMOJI("1f4dd"), label: word, correct: true },
            { url: TWEMOJI("2753"), label: "Option 2", correct: false },
            { url: TWEMOJI("2754"), label: "Option 3", correct: false }
        ]
    };
}

// Comprehensive Word Bank for Grade 3 English
// 三年级上册 (Grade 3, Semester 1) and 三年级下册 (Grade 3, Semester 2)

const WORD_BANK = {
    // ==========================================
    // 三年级上册 (Grade 3, Semester 1)
    // ==========================================
    
    "三年级上册": {
        // Unit 1: Hello!
        "Unit 1": [
            { word: "Hello", chinese: "你好", emoji: "👋", images: [
                { url: TWEMOJI("1f44b"), label: "Wave", correct: true },
                { url: TWEMOJI("1f44d"), label: "Thumbs Up", correct: false },
                { url: TWEMOJI("270b"), label: "Hand", correct: false }
            ]},
            { word: "Hi", chinese: "嗨", emoji: "👋", images: [
                { url: TWEMOJI("1f44b"), label: "Wave", correct: true },
                { url: TWEMOJI("1f44e"), label: "Thumbs Down", correct: false },
                { url: TWEMOJI("1f91a"), label: "Back of Hand", correct: false }
            ]},
            { word: "Bye", chinese: "再见", emoji: "👋", images: [
                { url: TWEMOJI("1f44b"), label: "Wave", correct: true },
                { url: TWEMOJI("1f64f"), label: "Pray", correct: false },
                { url: TWEMOJI("1f91d"), label: "Handshake", correct: false }
            ]},
            { word: "Goodbye", chinese: "再见", emoji: "👋", images: [
                { url: TWEMOJI("1f44b"), label: "Wave", correct: true },
                { url: TWEMOJI("1f44f"), label: "Clap", correct: false },
                { url: TWEMOJI("1f4aa"), label: "Muscle", correct: false }
            ]},
            { word: "Ruler", chinese: "尺子", emoji: "📏", images: [
                { url: TWEMOJI("1f4cf"), label: "Ruler", correct: true },
                { url: TWEMOJI("270f"), label: "Pencil", correct: false },
                { url: TWEMOJI("1f4d6"), label: "Book", correct: false }
            ]},
            { word: "Pencil", chinese: "铅笔", emoji: "✏️", images: [
                { url: TWEMOJI("270f"), label: "Pencil", correct: true },
                { url: TWEMOJI("1f58a"), label: "Pen", correct: false },
                { url: TWEMOJI("1f4cf"), label: "Ruler", correct: false }
            ]},
            { word: "Eraser", chinese: "橡皮", emoji: "🧽", images: [
                { url: TWEMOJI("1f9fd"), label: "Sponge", correct: true },
                { url: TWEMOJI("270f"), label: "Pencil", correct: false },
                { url: TWEMOJI("1f4d3"), label: "Notebook", correct: false }
            ]},
            { word: "Crayon", chinese: "蜡笔", emoji: "🖍️", images: [
                { url: TWEMOJI("1f58d"), label: "Crayon", correct: true },
                { url: TWEMOJI("270f"), label: "Pencil", correct: false },
                { url: TWEMOJI("1f58c"), label: "Paintbrush", correct: false }
            ]},
            { word: "Bag", chinese: "书包", emoji: "🎒", images: [
                { url: TWEMOJI("1f392"), label: "Backpack", correct: true },
                { url: TWEMOJI("1f4bc"), label: "Briefcase", correct: false },
                { url: TWEMOJI("1f45c"), label: "Handbag", correct: false }
            ]},
            { word: "Pen", chinese: "钢笔", emoji: "🖊️", images: [
                { url: TWEMOJI("1f58a"), label: "Pen", correct: true },
                { url: TWEMOJI("270f"), label: "Pencil", correct: false },
                { url: TWEMOJI("1f58d"), label: "Crayon", correct: false }
            ]},
            { word: "Pencil box", chinese: "铅笔盒", emoji: "📦", images: [
                { url: TWEMOJI("1f4e6"), label: "Box", correct: true },
                { url: TWEMOJI("1f392"), label: "Backpack", correct: false },
                { url: TWEMOJI("1f4d5"), label: "Book", correct: false }
            ]},
            { word: "Book", chinese: "书", emoji: "📕", images: [
                { url: TWEMOJI("1f4d5"), label: "Book", correct: true },
                { url: TWEMOJI("1f4d3"), label: "Notebook", correct: false },
                { url: TWEMOJI("1f4f0"), label: "Newspaper", correct: false }
            ]},
            { word: "School", chinese: "学校", emoji: "🏫", images: [
                { url: TWEMOJI("1f3eb"), label: "School", correct: true },
                { url: TWEMOJI("1f3e0"), label: "House", correct: false },
                { url: TWEMOJI("1f3e2"), label: "Building", correct: false }
            ]}
        ],

        // Unit 2: Colours
        "Unit 2": [
            { word: "Red", chinese: "红色", emoji: "🔴", images: [
                { url: TWEMOJI("1f534"), label: "Red Circle", correct: true },
                { url: TWEMOJI("1f535"), label: "Blue Circle", correct: false },
                { url: TWEMOJI("1f7e2"), label: "Green Circle", correct: false }
            ]},
            { word: "Green", chinese: "绿色", emoji: "🟢", images: [
                { url: TWEMOJI("1f7e2"), label: "Green Circle", correct: true },
                { url: TWEMOJI("1f534"), label: "Red Circle", correct: false },
                { url: TWEMOJI("1f7e1"), label: "Yellow Circle", correct: false }
            ]},
            { word: "Yellow", chinese: "黄色", emoji: "🟡", images: [
                { url: TWEMOJI("1f7e1"), label: "Yellow Circle", correct: true },
                { url: TWEMOJI("1f7e0"), label: "Orange Circle", correct: false },
                { url: TWEMOJI("1f534"), label: "Red Circle", correct: false }
            ]},
            { word: "Blue", chinese: "蓝色", emoji: "🔵", images: [
                { url: TWEMOJI("1f535"), label: "Blue Circle", correct: true },
                { url: TWEMOJI("1f7e3"), label: "Purple Circle", correct: false },
                { url: TWEMOJI("1f7e2"), label: "Green Circle", correct: false }
            ]},
            { word: "Black", chinese: "黑色", emoji: "⚫", images: [
                { url: TWEMOJI("26ab"), label: "Black Circle", correct: true },
                { url: TWEMOJI("26aa"), label: "White Circle", correct: false },
                { url: TWEMOJI("1f7e4"), label: "Brown Circle", correct: false }
            ]},
            { word: "Brown", chinese: "棕色", emoji: "🟤", images: [
                { url: TWEMOJI("1f7e4"), label: "Brown Circle", correct: true },
                { url: TWEMOJI("1f7e0"), label: "Orange Circle", correct: false },
                { url: TWEMOJI("26ab"), label: "Black Circle", correct: false }
            ]},
            { word: "White", chinese: "白色", emoji: "⚪", images: [
                { url: TWEMOJI("26aa"), label: "White Circle", correct: true },
                { url: TWEMOJI("26ab"), label: "Black Circle", correct: false },
                { url: TWEMOJI("1f535"), label: "Blue Circle", correct: false }
            ]},
            { word: "Orange", chinese: "橙色", emoji: "🟠", images: [
                { url: TWEMOJI("1f7e0"), label: "Orange Circle", correct: true },
                { url: TWEMOJI("1f7e1"), label: "Yellow Circle", correct: false },
                { url: TWEMOJI("1f534"), label: "Red Circle", correct: false }
            ]},
            { word: "Purple", chinese: "紫色", emoji: "🟣", images: [
                { url: TWEMOJI("1f7e3"), label: "Purple Circle", correct: true },
                { url: TWEMOJI("1f535"), label: "Blue Circle", correct: false },
                { url: TWEMOJI("1f534"), label: "Red Circle", correct: false }
            ]},
            { word: "Pink", chinese: "粉色", emoji: "💗", images: [
                { url: TWEMOJI("1f497"), label: "Pink Heart", correct: true },
                { url: TWEMOJI("2764"), label: "Red Heart", correct: false },
                { url: TWEMOJI("1f49c"), label: "Purple Heart", correct: false }
            ]}
        ],

        // Unit 3: Look at me!
        "Unit 3": [
            { word: "Head", chinese: "头", emoji: "🗣️", images: [
                { url: TWEMOJI("1f5e3"), label: "Head", correct: true },
                { url: TWEMOJI("1f442"), label: "Ear", correct: false },
                { url: TWEMOJI("1f440"), label: "Eyes", correct: false }
            ]},
            { word: "Face", chinese: "脸", emoji: "😊", images: [
                { url: TWEMOJI("1f60a"), label: "Face", correct: true },
                { url: TWEMOJI("1f440"), label: "Eyes", correct: false },
                { url: TWEMOJI("1f442"), label: "Ear", correct: false }
            ]},
            { word: "Nose", chinese: "鼻子", emoji: "👃", images: [
                { url: TWEMOJI("1f443"), label: "Nose", correct: true },
                { url: TWEMOJI("1f442"), label: "Ear", correct: false },
                { url: TWEMOJI("1f444"), label: "Mouth", correct: false }
            ]},
            { word: "Mouth", chinese: "嘴巴", emoji: "👄", images: [
                { url: TWEMOJI("1f444"), label: "Mouth", correct: true },
                { url: TWEMOJI("1f443"), label: "Nose", correct: false },
                { url: TWEMOJI("1f445"), label: "Tongue", correct: false }
            ]},
            { word: "Eye", chinese: "眼睛", emoji: "👁️", images: [
                { url: TWEMOJI("1f441"), label: "Eye", correct: true },
                { url: TWEMOJI("1f442"), label: "Ear", correct: false },
                { url: TWEMOJI("1f443"), label: "Nose", correct: false }
            ]},
            { word: "Ear", chinese: "耳朵", emoji: "👂", images: [
                { url: TWEMOJI("1f442"), label: "Ear", correct: true },
                { url: TWEMOJI("1f443"), label: "Nose", correct: false },
                { url: TWEMOJI("1f441"), label: "Eye", correct: false }
            ]},
            { word: "Arm", chinese: "手臂", emoji: "💪", images: [
                { url: TWEMOJI("1f4aa"), label: "Arm", correct: true },
                { url: TWEMOJI("1f44b"), label: "Hand", correct: false },
                { url: TWEMOJI("1f9b5"), label: "Leg", correct: false }
            ]},
            { word: "Hand", chinese: "手", emoji: "✋", images: [
                { url: TWEMOJI("270b"), label: "Hand", correct: true },
                { url: TWEMOJI("1f4aa"), label: "Arm", correct: false },
                { url: TWEMOJI("1f44d"), label: "Thumbs Up", correct: false }
            ]},
            { word: "Leg", chinese: "腿", emoji: "🦵", images: [
                { url: TWEMOJI("1f9b5"), label: "Leg", correct: true },
                { url: TWEMOJI("1f9b6"), label: "Foot", correct: false },
                { url: TWEMOJI("1f4aa"), label: "Arm", correct: false }
            ]},
            { word: "Foot", chinese: "脚", emoji: "🦶", images: [
                { url: TWEMOJI("1f9b6"), label: "Foot", correct: true },
                { url: TWEMOJI("1f9b5"), label: "Leg", correct: false },
                { url: TWEMOJI("270b"), label: "Hand", correct: false }
            ]},
            { word: "Body", chinese: "身体", emoji: "🧍", images: [
                { url: TWEMOJI("1f9cd"), label: "Person Standing", correct: true },
                { url: TWEMOJI("1f9b5"), label: "Leg", correct: false },
                { url: TWEMOJI("1f4aa"), label: "Arm", correct: false }
            ]},
            { word: "Finger", chinese: "手指", emoji: "👆", images: [
                { url: TWEMOJI("1f446"), label: "Finger", correct: true },
                { url: TWEMOJI("270b"), label: "Hand", correct: false },
                { url: TWEMOJI("1f44d"), label: "Thumbs Up", correct: false }
            ]}
        ],

        // Unit 4: We love animals
        "Unit 4": [
            { word: "Cat", chinese: "猫", emoji: "🐱", images: [
                { url: TWEMOJI("1f431"), label: "Cat", correct: true },
                { url: TWEMOJI("1f436"), label: "Dog", correct: false },
                { url: TWEMOJI("1f430"), label: "Rabbit", correct: false }
            ]},
            { word: "Dog", chinese: "狗", emoji: "🐶", images: [
                { url: TWEMOJI("1f436"), label: "Dog", correct: true },
                { url: TWEMOJI("1f431"), label: "Cat", correct: false },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false }
            ]},
            { word: "Duck", chinese: "鸭子", emoji: "🦆", images: [
                { url: TWEMOJI("1f986"), label: "Duck", correct: true },
                { url: TWEMOJI("1f414"), label: "Chicken", correct: false },
                { url: TWEMOJI("1f426"), label: "Bird", correct: false }
            ]},
            { word: "Monkey", chinese: "猴子", emoji: "🐵", images: [
                { url: TWEMOJI("1f435"), label: "Monkey", correct: true },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false },
                { url: TWEMOJI("1f418"), label: "Elephant", correct: false }
            ]},
            { word: "Panda", chinese: "熊猫", emoji: "🐼", images: [
                { url: TWEMOJI("1f43c"), label: "Panda", correct: true },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false },
                { url: TWEMOJI("1f428"), label: "Koala", correct: false }
            ]},
            { word: "Rabbit", chinese: "兔子", emoji: "🐰", images: [
                { url: TWEMOJI("1f430"), label: "Rabbit", correct: true },
                { url: TWEMOJI("1f431"), label: "Cat", correct: false },
                { url: TWEMOJI("1f42d"), label: "Mouse", correct: false }
            ]},
            { word: "Bird", chinese: "鸟", emoji: "🐦", images: [
                { url: TWEMOJI("1f426"), label: "Bird", correct: true },
                { url: TWEMOJI("1f986"), label: "Duck", correct: false },
                { url: TWEMOJI("1f414"), label: "Chicken", correct: false }
            ]},
            { word: "Bear", chinese: "熊", emoji: "🐻", images: [
                { url: TWEMOJI("1f43b"), label: "Bear", correct: true },
                { url: TWEMOJI("1f43c"), label: "Panda", correct: false },
                { url: TWEMOJI("1f981"), label: "Lion", correct: false }
            ]},
            { word: "Elephant", chinese: "大象", emoji: "🐘", images: [
                { url: TWEMOJI("1f418"), label: "Elephant", correct: true },
                { url: TWEMOJI("1f992"), label: "Giraffe", correct: false },
                { url: TWEMOJI("1f98f"), label: "Rhinoceros", correct: false }
            ]},
            { word: "Tiger", chinese: "老虎", emoji: "🐯", images: [
                { url: TWEMOJI("1f42f"), label: "Tiger", correct: true },
                { url: TWEMOJI("1f981"), label: "Lion", correct: false },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false }
            ]},
            { word: "Pig", chinese: "猪", emoji: "🐷", images: [
                { url: TWEMOJI("1f437"), label: "Pig", correct: true },
                { url: TWEMOJI("1f404"), label: "Cow", correct: false },
                { url: TWEMOJI("1f411"), label: "Sheep", correct: false }
            ]},
            { word: "Zoo", chinese: "动物园", emoji: "🦁", images: [
                { url: TWEMOJI("1f981"), label: "Lion (Zoo)", correct: true },
                { url: TWEMOJI("1f3e0"), label: "House", correct: false },
                { url: TWEMOJI("1f3eb"), label: "School", correct: false }
            ]}
        ],

        // Unit 5: Let's eat!
        "Unit 5": [
            { word: "Bread", chinese: "面包", emoji: "🍞", images: [
                { url: TWEMOJI("1f35e"), label: "Bread", correct: true },
                { url: TWEMOJI("1f382"), label: "Cake", correct: false },
                { url: TWEMOJI("1f36a"), label: "Cookie", correct: false }
            ]},
            { word: "Juice", chinese: "果汁", emoji: "🧃", images: [
                { url: TWEMOJI("1f9c3"), label: "Juice", correct: true },
                { url: TWEMOJI("1f37c"), label: "Milk", correct: false },
                { url: TWEMOJI("2615"), label: "Coffee", correct: false }
            ]},
            { word: "Egg", chinese: "鸡蛋", emoji: "🥚", images: [
                { url: TWEMOJI("1f95a"), label: "Egg", correct: true },
                { url: TWEMOJI("1f414"), label: "Chicken", correct: false },
                { url: TWEMOJI("1f357"), label: "Drumstick", correct: false }
            ]},
            { word: "Milk", chinese: "牛奶", emoji: "🥛", images: [
                { url: TWEMOJI("1f95b"), label: "Milk", correct: true },
                { url: TWEMOJI("1f9c3"), label: "Juice", correct: false },
                { url: TWEMOJI("2615"), label: "Coffee", correct: false }
            ]},
            { word: "Water", chinese: "水", emoji: "💧", images: [
                { url: TWEMOJI("1f4a7"), label: "Water", correct: true },
                { url: TWEMOJI("1f95b"), label: "Milk", correct: false },
                { url: TWEMOJI("1f9c3"), label: "Juice", correct: false }
            ]},
            { word: "Cake", chinese: "蛋糕", emoji: "🎂", images: [
                { url: TWEMOJI("1f382"), label: "Cake", correct: true },
                { url: TWEMOJI("1f35e"), label: "Bread", correct: false },
                { url: TWEMOJI("1f369"), label: "Donut", correct: false }
            ]},
            { word: "Fish", chinese: "鱼", emoji: "🐟", images: [
                { url: TWEMOJI("1f41f"), label: "Fish", correct: true },
                { url: TWEMOJI("1f990"), label: "Shrimp", correct: false },
                { url: TWEMOJI("1f980"), label: "Crab", correct: false }
            ]},
            { word: "Rice", chinese: "米饭", emoji: "🍚", images: [
                { url: TWEMOJI("1f35a"), label: "Rice", correct: true },
                { url: TWEMOJI("1f35c"), label: "Noodles", correct: false },
                { url: TWEMOJI("1f35e"), label: "Bread", correct: false }
            ]},
            { word: "Noodles", chinese: "面条", emoji: "🍜", images: [
                { url: TWEMOJI("1f35c"), label: "Noodles", correct: true },
                { url: TWEMOJI("1f35a"), label: "Rice", correct: false },
                { url: TWEMOJI("1f35d"), label: "Spaghetti", correct: false }
            ]},
            { word: "Chicken", chinese: "鸡肉", emoji: "🍗", images: [
                { url: TWEMOJI("1f357"), label: "Chicken", correct: true },
                { url: TWEMOJI("1f969"), label: "Steak", correct: false },
                { url: TWEMOJI("1f953"), label: "Bacon", correct: false }
            ]},
            { word: "Hot dog", chinese: "热狗", emoji: "🌭", images: [
                { url: TWEMOJI("1f32d"), label: "Hot dog", correct: true },
                { url: TWEMOJI("1f354"), label: "Hamburger", correct: false },
                { url: TWEMOJI("1f35e"), label: "Bread", correct: false }
            ]},
            { word: "Hamburger", chinese: "汉堡包", emoji: "🍔", images: [
                { url: TWEMOJI("1f354"), label: "Hamburger", correct: true },
                { url: TWEMOJI("1f32d"), label: "Hot dog", correct: false },
                { url: TWEMOJI("1f35f"), label: "Fries", correct: false }
            ]}
        ],

        // Unit 6: Happy birthday!
        "Unit 6": [
            { word: "One", chinese: "一", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "One", correct: true },
                { url: TWEMOJI("32-20e3"), label: "Two", correct: false },
                { url: TWEMOJI("33-20e3"), label: "Three", correct: false }
            ]},
            { word: "Two", chinese: "二", emoji: "2️⃣", images: [
                { url: TWEMOJI("32-20e3"), label: "Two", correct: true },
                { url: TWEMOJI("31-20e3"), label: "One", correct: false },
                { url: TWEMOJI("33-20e3"), label: "Three", correct: false }
            ]},
            { word: "Three", chinese: "三", emoji: "3️⃣", images: [
                { url: TWEMOJI("33-20e3"), label: "Three", correct: true },
                { url: TWEMOJI("32-20e3"), label: "Two", correct: false },
                { url: TWEMOJI("34-20e3"), label: "Four", correct: false }
            ]},
            { word: "Four", chinese: "四", emoji: "4️⃣", images: [
                { url: TWEMOJI("34-20e3"), label: "Four", correct: true },
                { url: TWEMOJI("33-20e3"), label: "Three", correct: false },
                { url: TWEMOJI("35-20e3"), label: "Five", correct: false }
            ]},
            { word: "Five", chinese: "五", emoji: "5️⃣", images: [
                { url: TWEMOJI("35-20e3"), label: "Five", correct: true },
                { url: TWEMOJI("34-20e3"), label: "Four", correct: false },
                { url: TWEMOJI("36-20e3"), label: "Six", correct: false }
            ]},
            { word: "Six", chinese: "六", emoji: "6️⃣", images: [
                { url: TWEMOJI("36-20e3"), label: "Six", correct: true },
                { url: TWEMOJI("35-20e3"), label: "Five", correct: false },
                { url: TWEMOJI("37-20e3"), label: "Seven", correct: false }
            ]},
            { word: "Seven", chinese: "七", emoji: "7️⃣", images: [
                { url: TWEMOJI("37-20e3"), label: "Seven", correct: true },
                { url: TWEMOJI("36-20e3"), label: "Six", correct: false },
                { url: TWEMOJI("38-20e3"), label: "Eight", correct: false }
            ]},
            { word: "Eight", chinese: "八", emoji: "8️⃣", images: [
                { url: TWEMOJI("38-20e3"), label: "Eight", correct: true },
                { url: TWEMOJI("37-20e3"), label: "Seven", correct: false },
                { url: TWEMOJI("39-20e3"), label: "Nine", correct: false }
            ]},
            { word: "Nine", chinese: "九", emoji: "9️⃣", images: [
                { url: TWEMOJI("39-20e3"), label: "Nine", correct: true },
                { url: TWEMOJI("38-20e3"), label: "Eight", correct: false },
                { url: TWEMOJI("31-30-20e3"), label: "Ten", correct: false }
            ]},
            { word: "Ten", chinese: "十", emoji: "🔟", images: [
                { url: TWEMOJI("1f51f"), label: "Ten", correct: true },
                { url: TWEMOJI("39-20e3"), label: "Nine", correct: false },
                { url: TWEMOJI("38-20e3"), label: "Eight", correct: false }
            ]},
            { word: "Gift", chinese: "礼物", emoji: "🎁", images: [
                { url: TWEMOJI("1f381"), label: "Gift", correct: true },
                { url: TWEMOJI("1f382"), label: "Cake", correct: false },
                { url: TWEMOJI("1f388"), label: "Balloon", correct: false }
            ]},
            { word: "Balloon", chinese: "气球", emoji: "🎈", images: [
                { url: TWEMOJI("1f388"), label: "Balloon", correct: true },
                { url: TWEMOJI("1f381"), label: "Gift", correct: false },
                { url: TWEMOJI("1f389"), label: "Party", correct: false }
            ]},
            { word: "Candle", chinese: "蜡烛", emoji: "🕯️", images: [
                { url: TWEMOJI("1f56f"), label: "Candle", correct: true },
                { url: TWEMOJI("1f382"), label: "Cake", correct: false },
                { url: TWEMOJI("1f381"), label: "Gift", correct: false }
            ]},
            { word: "Happy", chinese: "快乐的", emoji: "😊", images: [
                { url: TWEMOJI("1f60a"), label: "Happy", correct: true },
                { url: TWEMOJI("1f622"), label: "Sad", correct: false },
                { url: TWEMOJI("1f620"), label: "Angry", correct: false }
            ]},
            { word: "Birthday", chinese: "生日", emoji: "🎂", images: [
                { url: TWEMOJI("1f382"), label: "Birthday Cake", correct: true },
                { url: TWEMOJI("1f381"), label: "Gift", correct: false },
                { url: TWEMOJI("1f388"), label: "Balloon", correct: false }
            ]}
        ]
    },

    // ==========================================
    // 三年级下册 (Grade 3, Semester 2)
    // ==========================================
    
    "三年级下册": {
        // Unit 1: Welcome back to school!
        "Unit 1": [
            { word: "UK", chinese: "英国", emoji: "🇬🇧", images: [
                { url: TWEMOJI("1f1ec-1f1e7"), label: "UK", correct: true },
                { url: TWEMOJI("1f1fa-1f1f8"), label: "USA", correct: false },
                { url: TWEMOJI("1f1e8-1f1e6"), label: "Canada", correct: false }
            ]},
            { word: "Canada", chinese: "加拿大", emoji: "🇨🇦", images: [
                { url: TWEMOJI("1f1e8-1f1e6"), label: "Canada", correct: true },
                { url: TWEMOJI("1f1fa-1f1f8"), label: "USA", correct: false },
                { url: TWEMOJI("1f1ec-1f1e7"), label: "UK", correct: false }
            ]},
            { word: "USA", chinese: "美国", emoji: "🇺🇸", images: [
                { url: TWEMOJI("1f1fa-1f1f8"), label: "USA", correct: true },
                { url: TWEMOJI("1f1e8-1f1e6"), label: "Canada", correct: false },
                { url: TWEMOJI("1f1ec-1f1e7"), label: "UK", correct: false }
            ]},
            { word: "China", chinese: "中国", emoji: "🇨🇳", images: [
                { url: TWEMOJI("1f1e8-1f1f3"), label: "China", correct: true },
                { url: TWEMOJI("1f1ef-1f1f5"), label: "Japan", correct: false },
                { url: TWEMOJI("1f1f0-1f1f7"), label: "Korea", correct: false }
            ]},
            { word: "Student", chinese: "学生", emoji: "👨‍🎓", images: [
                { url: TWEMOJI("1f468-200d-1f393"), label: "Student", correct: true },
                { url: TWEMOJI("1f468-200d-1f3eb"), label: "Teacher", correct: false },
                { url: TWEMOJI("1f468-200d-1f4bc"), label: "Worker", correct: false }
            ]},
            { word: "Teacher", chinese: "老师", emoji: "👩‍🏫", images: [
                { url: TWEMOJI("1f469-200d-1f3eb"), label: "Teacher", correct: true },
                { url: TWEMOJI("1f468-200d-1f393"), label: "Student", correct: false },
                { url: TWEMOJI("1f469-200d-1f4bc"), label: "Worker", correct: false }
            ]},
            { word: "Boy", chinese: "男孩", emoji: "👦", images: [
                { url: TWEMOJI("1f466"), label: "Boy", correct: true },
                { url: TWEMOJI("1f467"), label: "Girl", correct: false },
                { url: TWEMOJI("1f468"), label: "Man", correct: false }
            ]},
            { word: "Girl", chinese: "女孩", emoji: "👧", images: [
                { url: TWEMOJI("1f467"), label: "Girl", correct: true },
                { url: TWEMOJI("1f466"), label: "Boy", correct: false },
                { url: TWEMOJI("1f469"), label: "Woman", correct: false }
            ]},
            { word: "Friend", chinese: "朋友", emoji: "🤝", images: [
                { url: TWEMOJI("1f91d"), label: "Handshake", correct: true },
                { url: TWEMOJI("1f44b"), label: "Wave", correct: false },
                { url: TWEMOJI("1f44d"), label: "Thumbs Up", correct: false }
            ]},
            { word: "New", chinese: "新的", emoji: "✨", images: [
                { url: TWEMOJI("2728"), label: "Sparkles", correct: true },
                { url: TWEMOJI("1f4a5"), label: "Boom", correct: false },
                { url: TWEMOJI("1f31f"), label: "Star", correct: false }
            ]},
            { word: "Today", chinese: "今天", emoji: "📅", images: [
                { url: TWEMOJI("1f4c5"), label: "Calendar", correct: true },
                { url: TWEMOJI("23f0"), label: "Clock", correct: false },
                { url: TWEMOJI("1f319"), label: "Moon", correct: false }
            ]}
        ],

        // Unit 2: My family
        "Unit 2": [
            { word: "Father", chinese: "父亲", emoji: "👨", images: [
                { url: TWEMOJI("1f468"), label: "Man", correct: true },
                { url: TWEMOJI("1f469"), label: "Woman", correct: false },
                { url: TWEMOJI("1f466"), label: "Boy", correct: false }
            ]},
            { word: "Dad", chinese: "爸爸", emoji: "👨", images: [
                { url: TWEMOJI("1f468"), label: "Man", correct: true },
                { url: TWEMOJI("1f469"), label: "Woman", correct: false },
                { url: TWEMOJI("1f474"), label: "Old Man", correct: false }
            ]},
            { word: "Mother", chinese: "母亲", emoji: "👩", images: [
                { url: TWEMOJI("1f469"), label: "Woman", correct: true },
                { url: TWEMOJI("1f468"), label: "Man", correct: false },
                { url: TWEMOJI("1f467"), label: "Girl", correct: false }
            ]},
            { word: "Mom", chinese: "妈妈", emoji: "👩", images: [
                { url: TWEMOJI("1f469"), label: "Woman", correct: true },
                { url: TWEMOJI("1f468"), label: "Man", correct: false },
                { url: TWEMOJI("1f475"), label: "Old Woman", correct: false }
            ]},
            { word: "Man", chinese: "男人", emoji: "👨", images: [
                { url: TWEMOJI("1f468"), label: "Man", correct: true },
                { url: TWEMOJI("1f469"), label: "Woman", correct: false },
                { url: TWEMOJI("1f466"), label: "Boy", correct: false }
            ]},
            { word: "Woman", chinese: "女人", emoji: "👩", images: [
                { url: TWEMOJI("1f469"), label: "Woman", correct: true },
                { url: TWEMOJI("1f468"), label: "Man", correct: false },
                { url: TWEMOJI("1f467"), label: "Girl", correct: false }
            ]},
            { word: "Sister", chinese: "姐妹", emoji: "👧", images: [
                { url: TWEMOJI("1f467"), label: "Girl", correct: true },
                { url: TWEMOJI("1f466"), label: "Boy", correct: false },
                { url: TWEMOJI("1f469"), label: "Woman", correct: false }
            ]},
            { word: "Brother", chinese: "兄弟", emoji: "👦", images: [
                { url: TWEMOJI("1f466"), label: "Boy", correct: true },
                { url: TWEMOJI("1f467"), label: "Girl", correct: false },
                { url: TWEMOJI("1f468"), label: "Man", correct: false }
            ]},
            { word: "Grandmother", chinese: "祖母/外婆", emoji: "👵", images: [
                { url: TWEMOJI("1f475"), label: "Old Woman", correct: true },
                { url: TWEMOJI("1f474"), label: "Old Man", correct: false },
                { url: TWEMOJI("1f469"), label: "Woman", correct: false }
            ]},
            { word: "Grandfather", chinese: "祖父/外公", emoji: "👴", images: [
                { url: TWEMOJI("1f474"), label: "Old Man", correct: true },
                { url: TWEMOJI("1f475"), label: "Old Woman", correct: false },
                { url: TWEMOJI("1f468"), label: "Man", correct: false }
            ]},
            { word: "Family", chinese: "家庭", emoji: "👨‍👩‍👧‍👦", images: [
                { url: TWEMOJI("1f468-200d-1f469-200d-1f467-200d-1f466"), label: "Family", correct: true },
                { url: TWEMOJI("1f3e0"), label: "House", correct: false },
                { url: TWEMOJI("1f46b"), label: "Couple", correct: false }
            ]}
        ],

        // Unit 3: At the zoo
        "Unit 3": [
            { word: "Thin", chinese: "瘦的", emoji: "🦒", images: [
                { url: TWEMOJI("1f992"), label: "Giraffe", correct: true },
                { url: TWEMOJI("1f418"), label: "Elephant", correct: false },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false }
            ]},
            { word: "Fat", chinese: "胖的", emoji: "🐷", images: [
                { url: TWEMOJI("1f437"), label: "Pig", correct: true },
                { url: TWEMOJI("1f992"), label: "Giraffe", correct: false },
                { url: TWEMOJI("1f98a"), label: "Fox", correct: false }
            ]},
            { word: "Tall", chinese: "高的", emoji: "🦒", images: [
                { url: TWEMOJI("1f992"), label: "Giraffe", correct: true },
                { url: TWEMOJI("1f42d"), label: "Mouse", correct: false },
                { url: TWEMOJI("1f430"), label: "Rabbit", correct: false }
            ]},
            { word: "Short", chinese: "矮的", emoji: "🐭", images: [
                { url: TWEMOJI("1f42d"), label: "Mouse", correct: true },
                { url: TWEMOJI("1f992"), label: "Giraffe", correct: false },
                { url: TWEMOJI("1f418"), label: "Elephant", correct: false }
            ]},
            { word: "Long", chinese: "长的", emoji: "🐍", images: [
                { url: TWEMOJI("1f40d"), label: "Snake", correct: true },
                { url: TWEMOJI("1f422"), label: "Turtle", correct: false },
                { url: TWEMOJI("1f430"), label: "Rabbit", correct: false }
            ]},
            { word: "Big", chinese: "大的", emoji: "🐘", images: [
                { url: TWEMOJI("1f418"), label: "Elephant", correct: true },
                { url: TWEMOJI("1f42d"), label: "Mouse", correct: false },
                { url: TWEMOJI("1f41c"), label: "Ant", correct: false }
            ]},
            { word: "Small", chinese: "小的", emoji: "🐜", images: [
                { url: TWEMOJI("1f41c"), label: "Ant", correct: true },
                { url: TWEMOJI("1f418"), label: "Elephant", correct: false },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false }
            ]},
            { word: "Giraffe", chinese: "长颈鹿", emoji: "🦒", images: [
                { url: TWEMOJI("1f992"), label: "Giraffe", correct: true },
                { url: TWEMOJI("1f418"), label: "Elephant", correct: false },
                { url: TWEMOJI("1f99b"), label: "Hippo", correct: false }
            ]},
            { word: "Deer", chinese: "鹿", emoji: "🦌", images: [
                { url: TWEMOJI("1f98c"), label: "Deer", correct: true },
                { url: TWEMOJI("1f40e"), label: "Horse", correct: false },
                { url: TWEMOJI("1f992"), label: "Giraffe", correct: false }
            ]},
            { word: "Children", chinese: "孩子们", emoji: "👧", images: [
                { url: TWEMOJI("1f467"), label: "Children", correct: true },
                { url: TWEMOJI("1f468"), label: "Man", correct: false },
                { url: TWEMOJI("1f469"), label: "Woman", correct: false }
            ]},
            { word: "Cute", chinese: "可爱的", emoji: "🥰", images: [
                { url: TWEMOJI("1f970"), label: "Cute Face", correct: true },
                { url: TWEMOJI("1f620"), label: "Angry", correct: false },
                { url: TWEMOJI("1f622"), label: "Sad", correct: false }
            ]}
        ],

        // Unit 4: Where is my car?
        "Unit 4": [
            { word: "On", chinese: "在...上面", emoji: "⬆️", images: [
                { url: TWEMOJI("2b06"), label: "Up Arrow", correct: true },
                { url: TWEMOJI("2b07"), label: "Down Arrow", correct: false },
                { url: TWEMOJI("27a1"), label: "Right Arrow", correct: false }
            ]},
            { word: "In", chinese: "在...里面", emoji: "📦", images: [
                { url: TWEMOJI("1f4e6"), label: "Box", correct: true },
                { url: TWEMOJI("2b06"), label: "Up Arrow", correct: false },
                { url: TWEMOJI("2b07"), label: "Down Arrow", correct: false }
            ]},
            { word: "Under", chinese: "在...下面", emoji: "⬇️", images: [
                { url: TWEMOJI("2b07"), label: "Down Arrow", correct: true },
                { url: TWEMOJI("2b06"), label: "Up Arrow", correct: false },
                { url: TWEMOJI("27a1"), label: "Right Arrow", correct: false }
            ]},
            { word: "Chair", chinese: "椅子", emoji: "🪑", images: [
                { url: TWEMOJI("1fa91"), label: "Chair", correct: true },
                { url: TWEMOJI("1f6cb"), label: "Couch", correct: false },
                { url: TWEMOJI("1f6cf"), label: "Bed", correct: false }
            ]},
            { word: "Desk", chinese: "书桌", emoji: "🪑", images: [
                { url: TWEMOJI("1fa91"), label: "Desk", correct: true },
                { url: TWEMOJI("1f6cb"), label: "Couch", correct: false },
                { url: TWEMOJI("1f6cf"), label: "Bed", correct: false }
            ]},
            { word: "Cap", chinese: "帽子", emoji: "🧢", images: [
                { url: TWEMOJI("1f9e2"), label: "Cap", correct: true },
                { url: TWEMOJI("1f3a9"), label: "Top Hat", correct: false },
                { url: TWEMOJI("1f452"), label: "Woman Hat", correct: false }
            ]},
            { word: "Ball", chinese: "球", emoji: "⚽", images: [
                { url: TWEMOJI("26bd"), label: "Ball", correct: true },
                { url: TWEMOJI("1f388"), label: "Balloon", correct: false },
                { url: TWEMOJI("1f3c0"), label: "Basketball", correct: false }
            ]},
            { word: "Car", chinese: "小汽车", emoji: "🚗", images: [
                { url: TWEMOJI("1f697"), label: "Car", correct: true },
                { url: TWEMOJI("1f68c"), label: "Bus", correct: false },
                { url: TWEMOJI("1f682"), label: "Train", correct: false }
            ]},
            { word: "Boat", chinese: "小船", emoji: "⛵", images: [
                { url: TWEMOJI("26f5"), label: "Boat", correct: true },
                { url: TWEMOJI("2708"), label: "Airplane", correct: false },
                { url: TWEMOJI("1f697"), label: "Car", correct: false }
            ]},
            { word: "Map", chinese: "地图", emoji: "🗺️", images: [
                { url: TWEMOJI("1f5fa"), label: "Map", correct: true },
                { url: TWEMOJI("1f4d6"), label: "Book", correct: false },
                { url: TWEMOJI("1f4f0"), label: "Newspaper", correct: false }
            ]},
            { word: "Toy", chinese: "玩具", emoji: "🧸", images: [
                { url: TWEMOJI("1f9f8"), label: "Teddy Bear", correct: true },
                { url: TWEMOJI("1f381"), label: "Gift", correct: false },
                { url: TWEMOJI("1f388"), label: "Balloon", correct: false }
            ]},
            { word: "Box", chinese: "盒子", emoji: "📦", images: [
                { url: TWEMOJI("1f4e6"), label: "Box", correct: true },
                { url: TWEMOJI("1f381"), label: "Gift", correct: false },
                { url: TWEMOJI("1f9f3"), label: "Luggage", correct: false }
            ]}
        ],

        // Unit 5: Do you like pears?
        "Unit 5": [
            { word: "Apple", chinese: "苹果", emoji: "🍎", images: [
                { url: TWEMOJI("1f34e"), label: "Apple", correct: true },
                { url: TWEMOJI("1f34c"), label: "Banana", correct: false },
                { url: TWEMOJI("1f34a"), label: "Orange", correct: false }
            ]},
            { word: "Pear", chinese: "梨", emoji: "🍐", images: [
                { url: TWEMOJI("1f350"), label: "Pear", correct: true },
                { url: TWEMOJI("1f34e"), label: "Apple", correct: false },
                { url: TWEMOJI("1f34b"), label: "Lemon", correct: false }
            ]},
            { word: "Orange", chinese: "橙子", emoji: "🍊", images: [
                { url: TWEMOJI("1f34a"), label: "Orange", correct: true },
                { url: TWEMOJI("1f34e"), label: "Apple", correct: false },
                { url: TWEMOJI("1f34b"), label: "Lemon", correct: false }
            ]},
            { word: "Banana", chinese: "香蕉", emoji: "🍌", images: [
                { url: TWEMOJI("1f34c"), label: "Banana", correct: true },
                { url: TWEMOJI("1f34e"), label: "Apple", correct: false },
                { url: TWEMOJI("1f347"), label: "Grape", correct: false }
            ]},
            { word: "Watermelon", chinese: "西瓜", emoji: "🍉", images: [
                { url: TWEMOJI("1f349"), label: "Watermelon", correct: true },
                { url: TWEMOJI("1f34e"), label: "Apple", correct: false },
                { url: TWEMOJI("1f353"), label: "Strawberry", correct: false }
            ]},
            { word: "Strawberry", chinese: "草莓", emoji: "🍓", images: [
                { url: TWEMOJI("1f353"), label: "Strawberry", correct: true },
                { url: TWEMOJI("1f352"), label: "Cherry", correct: false },
                { url: TWEMOJI("1f347"), label: "Grape", correct: false }
            ]},
            { word: "Grape", chinese: "葡萄", emoji: "🍇", images: [
                { url: TWEMOJI("1f347"), label: "Grape", correct: true },
                { url: TWEMOJI("1f353"), label: "Strawberry", correct: false },
                { url: TWEMOJI("1f352"), label: "Cherry", correct: false }
            ]},
            { word: "Fruit", chinese: "水果", emoji: "🍎", images: [
                { url: TWEMOJI("1f34e"), label: "Fruit", correct: true },
                { url: TWEMOJI("1f955"), label: "Carrot", correct: false },
                { url: TWEMOJI("1f35e"), label: "Bread", correct: false }
            ]},
            { word: "Like", chinese: "喜欢", emoji: "❤️", images: [
                { url: TWEMOJI("2764"), label: "Heart", correct: true },
                { url: TWEMOJI("1f494"), label: "Broken Heart", correct: false },
                { url: TWEMOJI("1f44e"), label: "Thumbs Down", correct: false }
            ]},
            { word: "Don't", chinese: "不", emoji: "🚫", images: [
                { url: TWEMOJI("1f6ab"), label: "No", correct: true },
                { url: TWEMOJI("2705"), label: "Check", correct: false },
                { url: TWEMOJI("1f44d"), label: "Thumbs Up", correct: false }
            ]},
            { word: "Buy", chinese: "买", emoji: "🛒", images: [
                { url: TWEMOJI("1f6d2"), label: "Shopping Cart", correct: true },
                { url: TWEMOJI("1f381"), label: "Gift", correct: false },
                { url: TWEMOJI("1f4b0"), label: "Money Bag", correct: false }
            ]}
        ],

        // Unit 6: How many?
        "Unit 6": [
            { word: "Eleven", chinese: "十一", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "Eleven", correct: true },
                { url: TWEMOJI("1f51f"), label: "Ten", correct: false },
                { url: TWEMOJI("32-20e3"), label: "Twelve", correct: false }
            ]},
            { word: "Twelve", chinese: "十二", emoji: "🕛", images: [
                { url: TWEMOJI("1f55b"), label: "Twelve O'Clock", correct: true },
                { url: TWEMOJI("31-20e3"), label: "Eleven", correct: false },
                { url: TWEMOJI("33-20e3"), label: "Thirteen", correct: false }
            ]},
            { word: "Thirteen", chinese: "十三", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "Thirteen", correct: true },
                { url: TWEMOJI("32-20e3"), label: "Twelve", correct: false },
                { url: TWEMOJI("34-20e3"), label: "Fourteen", correct: false }
            ]},
            { word: "Fourteen", chinese: "十四", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "Fourteen", correct: true },
                { url: TWEMOJI("33-20e3"), label: "Thirteen", correct: false },
                { url: TWEMOJI("35-20e3"), label: "Fifteen", correct: false }
            ]},
            { word: "Fifteen", chinese: "十五", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "Fifteen", correct: true },
                { url: TWEMOJI("34-20e3"), label: "Fourteen", correct: false },
                { url: TWEMOJI("36-20e3"), label: "Sixteen", correct: false }
            ]},
            { word: "Sixteen", chinese: "十六", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "Sixteen", correct: true },
                { url: TWEMOJI("35-20e3"), label: "Fifteen", correct: false },
                { url: TWEMOJI("37-20e3"), label: "Seventeen", correct: false }
            ]},
            { word: "Seventeen", chinese: "十七", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "Seventeen", correct: true },
                { url: TWEMOJI("36-20e3"), label: "Sixteen", correct: false },
                { url: TWEMOJI("38-20e3"), label: "Eighteen", correct: false }
            ]},
            { word: "Eighteen", chinese: "十八", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "Eighteen", correct: true },
                { url: TWEMOJI("37-20e3"), label: "Seventeen", correct: false },
                { url: TWEMOJI("39-20e3"), label: "Nineteen", correct: false }
            ]},
            { word: "Nineteen", chinese: "十九", emoji: "1️⃣", images: [
                { url: TWEMOJI("31-20e3"), label: "Nineteen", correct: true },
                { url: TWEMOJI("38-20e3"), label: "Eighteen", correct: false },
                { url: TWEMOJI("32-20e3"), label: "Twenty", correct: false }
            ]},
            { word: "Twenty", chinese: "二十", emoji: "2️⃣", images: [
                { url: TWEMOJI("32-20e3"), label: "Twenty", correct: true },
                { url: TWEMOJI("31-20e3"), label: "Nineteen", correct: false },
                { url: TWEMOJI("1f51f"), label: "Ten", correct: false }
            ]},
            { word: "Kite", chinese: "风筝", emoji: "🪁", images: [
                { url: TWEMOJI("1fa81"), label: "Kite", correct: true },
                { url: TWEMOJI("1f388"), label: "Balloon", correct: false },
                { url: TWEMOJI("2708"), label: "Airplane", correct: false }
            ]},
            { word: "How many", chinese: "多少", emoji: "🔢", images: [
                { url: TWEMOJI("1f522"), label: "Numbers", correct: true },
                { url: TWEMOJI("2753"), label: "Question", correct: false },
                { url: TWEMOJI("1f4af"), label: "100", correct: false }
            ]}
        ]
    },

    // ==========================================
    // KET Vocabulary by Topics
    // ==========================================
    
    "KET": {
        // Appliances
        "Appliances": [
            { word: "Camera", chinese: "相机", emoji: "📷", images: [
                { url: TWEMOJI("1f4f7"), label: "Camera", correct: true },
                { url: TWEMOJI("1f4f1"), label: "Phone", correct: false },
                { url: TWEMOJI("1f4bb"), label: "Laptop", correct: false }
            ]},
            { word: "Laptop", chinese: "笔记本电脑", emoji: "💻", images: [
                { url: TWEMOJI("1f4bb"), label: "Laptop", correct: true },
                { url: TWEMOJI("1f5a5"), label: "Desktop", correct: false },
                { url: TWEMOJI("1f4f1"), label: "Phone", correct: false }
            ]},
            { word: "Radio", chinese: "收音机", emoji: "📻", images: [
                { url: TWEMOJI("1f4fb"), label: "Radio", correct: true },
                { url: TWEMOJI("1f4fa"), label: "TV", correct: false },
                { url: TWEMOJI("1f4bb"), label: "Laptop", correct: false }
            ]},
            { word: "Telephone", chinese: "电话", emoji: "☎️", images: [
                { url: TWEMOJI("260e"), label: "Telephone", correct: true },
                { url: TWEMOJI("1f4f1"), label: "Mobile", correct: false },
                { url: TWEMOJI("1f4bb"), label: "Laptop", correct: false }
            ]},
            { word: "Mobile phone", chinese: "手机", emoji: "📱", images: [
                { url: TWEMOJI("1f4f1"), label: "Mobile", correct: true },
                { url: TWEMOJI("260e"), label: "Phone", correct: false },
                { url: TWEMOJI("1f4bb"), label: "Laptop", correct: false }
            ]},
            { word: "Television", chinese: "电视", emoji: "📺", images: [
                { url: TWEMOJI("1f4fa"), label: "TV", correct: true },
                { url: TWEMOJI("1f4bb"), label: "Laptop", correct: false },
                { url: TWEMOJI("1f4fb"), label: "Radio", correct: false }
            ]},
            { word: "Clock", chinese: "时钟", emoji: "🕐", images: [
                { url: TWEMOJI("1f550"), label: "Clock", correct: true },
                { url: TWEMOJI("231a"), label: "Watch", correct: false },
                { url: TWEMOJI("23f0"), label: "Alarm", correct: false }
            ]},
            { word: "Fridge", chinese: "冰箱", emoji: "🧊", images: [
                { url: TWEMOJI("1f9ca"), label: "Ice", correct: true },
                { url: TWEMOJI("1f372"), label: "Food", correct: false },
                { url: TWEMOJI("1f373"), label: "Cooking", correct: false }
            ]},
            { word: "Oven", chinese: "烤箱", emoji: "🔥", images: [
                { url: TWEMOJI("1f525"), label: "Fire", correct: true },
                { url: TWEMOJI("1f372"), label: "Pot", correct: false },
                { url: TWEMOJI("1f373"), label: "Pan", correct: false }
            ]},
            { word: "Computer", chinese: "电脑", emoji: "💻", images: [
                { url: TWEMOJI("1f4bb"), label: "Computer", correct: true },
                { url: TWEMOJI("1f4f1"), label: "Phone", correct: false },
                { url: TWEMOJI("1f4fa"), label: "TV", correct: false }
            ]},
            { word: "Washing machine", chinese: "洗衣机", emoji: "🧺", images: [
                { url: TWEMOJI("1f9fa"), label: "Basket", correct: true },
                { url: TWEMOJI("1f6bf"), label: "Shower", correct: false },
                { url: TWEMOJI("1f6c1"), label: "Bath", correct: false }
            ]},
            { word: "Lamp", chinese: "台灯", emoji: "💡", images: [
                { url: TWEMOJI("1f4a1"), label: "Light", correct: true },
                { url: TWEMOJI("1f56f"), label: "Candle", correct: false },
                { url: TWEMOJI("1f526"), label: "Flashlight", correct: false }
            ]}
        ],

        // Clothes and Accessories
        "Clothes": [
            { word: "Backpack", chinese: "背包", emoji: "🎒", images: [
                { url: TWEMOJI("1f392"), label: "Backpack", correct: true },
                { url: TWEMOJI("1f45c"), label: "Handbag", correct: false },
                { url: TWEMOJI("1f4bc"), label: "Briefcase", correct: false }
            ]},
            { word: "Glasses", chinese: "眼镜", emoji: "👓", images: [
                { url: TWEMOJI("1f453"), label: "Glasses", correct: true },
                { url: TWEMOJI("1f576"), label: "Sunglasses", correct: false },
                { url: TWEMOJI("1f440"), label: "Eyes", correct: false }
            ]},
            { word: "Ring", chinese: "戒指", emoji: "💍", images: [
                { url: TWEMOJI("1f48d"), label: "Ring", correct: true },
                { url: TWEMOJI("1f4ff"), label: "Necklace", correct: false },
                { url: TWEMOJI("1f451"), label: "Crown", correct: false }
            ]},
            { word: "Belt", chinese: "腰带", emoji: "🎽", images: [
                { url: TWEMOJI("1f3bd"), label: "Shirt", correct: true },
                { url: TWEMOJI("1f456"), label: "Jeans", correct: false },
                { url: TWEMOJI("1f45f"), label: "Shoe", correct: false }
            ]},
            { word: "Glove", chinese: "手套", emoji: "🧤", images: [
                { url: TWEMOJI("1f9e4"), label: "Glove", correct: true },
                { url: TWEMOJI("1f9e6"), label: "Sock", correct: false },
                { url: TWEMOJI("1f45f"), label: "Shoe", correct: false }
            ]},
            { word: "Trainers", chinese: "运动鞋", emoji: "👟", images: [
                { url: TWEMOJI("1f45f"), label: "Trainers", correct: true },
                { url: TWEMOJI("1f97e"), label: "Boot", correct: false },
                { url: TWEMOJI("1f460"), label: "Heel", correct: false }
            ]},
            { word: "Hat", chinese: "帽子", emoji: "🎩", images: [
                { url: TWEMOJI("1f3a9"), label: "Hat", correct: true },
                { url: TWEMOJI("1f9e2"), label: "Cap", correct: false },
                { url: TWEMOJI("1f451"), label: "Crown", correct: false }
            ]},
            { word: "Shirt", chinese: "衬衫", emoji: "👔", images: [
                { url: TWEMOJI("1f454"), label: "Shirt", correct: true },
                { url: TWEMOJI("1f455"), label: "T-shirt", correct: false },
                { url: TWEMOJI("1f456"), label: "Jeans", correct: false }
            ]},
            { word: "T-shirt", chinese: "T恤", emoji: "👕", images: [
                { url: TWEMOJI("1f455"), label: "T-shirt", correct: true },
                { url: TWEMOJI("1f454"), label: "Shirt", correct: false },
                { url: TWEMOJI("1f457"), label: "Dress", correct: false }
            ]},
            { word: "Cap", chinese: "帽子", emoji: "🧢", images: [
                { url: TWEMOJI("1f9e2"), label: "Cap", correct: true },
                { url: TWEMOJI("1f3a9"), label: "Hat", correct: false },
                { url: TWEMOJI("1f452"), label: "Woman Hat", correct: false }
            ]},
            { word: "Jacket", chinese: "夹克", emoji: "🧥", images: [
                { url: TWEMOJI("1f9e5"), label: "Jacket", correct: true },
                { url: TWEMOJI("1f455"), label: "T-shirt", correct: false },
                { url: TWEMOJI("1f454"), label: "Shirt", correct: false }
            ]},
            { word: "Shorts", chinese: "短裤", emoji: "🩳", images: [
                { url: TWEMOJI("1fa73"), label: "Shorts", correct: true },
                { url: TWEMOJI("1f456"), label: "Jeans", correct: false },
                { url: TWEMOJI("1f455"), label: "T-shirt", correct: false }
            ]},
            { word: "Umbrella", chinese: "雨伞", emoji: "☂️", images: [
                { url: TWEMOJI("2602"), label: "Umbrella", correct: true },
                { url: TWEMOJI("2614"), label: "Rain", correct: false },
                { url: TWEMOJI("1f302"), label: "Closed Umbrella", correct: false }
            ]},
            { word: "Jeans", chinese: "牛仔裤", emoji: "👖", images: [
                { url: TWEMOJI("1f456"), label: "Jeans", correct: true },
                { url: TWEMOJI("1fa73"), label: "Shorts", correct: false },
                { url: TWEMOJI("1f455"), label: "T-shirt", correct: false }
            ]},
            { word: "Shoes", chinese: "鞋子", emoji: "👞", images: [
                { url: TWEMOJI("1f45e"), label: "Shoes", correct: true },
                { url: TWEMOJI("1f45f"), label: "Trainers", correct: false },
                { url: TWEMOJI("1f97e"), label: "Boot", correct: false }
            ]},
            { word: "Sock", chinese: "袜子", emoji: "🧦", images: [
                { url: TWEMOJI("1f9e6"), label: "Sock", correct: true },
                { url: TWEMOJI("1f9e4"), label: "Glove", correct: false },
                { url: TWEMOJI("1f45f"), label: "Shoe", correct: false }
            ]},
            { word: "Watch", chinese: "手表", emoji: "⌚", images: [
                { url: TWEMOJI("231a"), label: "Watch", correct: true },
                { url: TWEMOJI("1f550"), label: "Clock", correct: false },
                { url: TWEMOJI("23f0"), label: "Alarm", correct: false }
            ]},
            { word: "Dress", chinese: "连衣裙", emoji: "👗", images: [
                { url: TWEMOJI("1f457"), label: "Dress", correct: true },
                { url: TWEMOJI("1f455"), label: "T-shirt", correct: false },
                { url: TWEMOJI("1f456"), label: "Jeans", correct: false }
            ]},
            { word: "Sunglasses", chinese: "太阳镜", emoji: "🕶️", images: [
                { url: TWEMOJI("1f576"), label: "Sunglasses", correct: true },
                { url: TWEMOJI("1f453"), label: "Glasses", correct: false },
                { url: TWEMOJI("1f440"), label: "Eyes", correct: false }
            ]}
        ],

        // Food and Drink (精选常用词汇)
        "Food": [
            { word: "Apple", chinese: "苹果", emoji: "🍎", images: [
                { url: TWEMOJI("1f34e"), label: "Apple", correct: true },
                { url: TWEMOJI("1f34a"), label: "Orange", correct: false },
                { url: TWEMOJI("1f350"), label: "Pear", correct: false }
            ]},
            { word: "Banana", chinese: "香蕉", emoji: "🍌", images: [
                { url: TWEMOJI("1f34c"), label: "Banana", correct: true },
                { url: TWEMOJI("1f34e"), label: "Apple", correct: false },
                { url: TWEMOJI("1f34a"), label: "Orange", correct: false }
            ]},
            { word: "Pizza", chinese: "披萨", emoji: "🍕", images: [
                { url: TWEMOJI("1f355"), label: "Pizza", correct: true },
                { url: TWEMOJI("1f354"), label: "Burger", correct: false },
                { url: TWEMOJI("1f32d"), label: "Hot dog", correct: false }
            ]},
            { word: "Burger", chinese: "汉堡", emoji: "🍔", images: [
                { url: TWEMOJI("1f354"), label: "Burger", correct: true },
                { url: TWEMOJI("1f355"), label: "Pizza", correct: false },
                { url: TWEMOJI("1f32d"), label: "Hot dog", correct: false }
            ]},
            { word: "Cake", chinese: "蛋糕", emoji: "🎂", images: [
                { url: TWEMOJI("1f382"), label: "Cake", correct: true },
                { url: TWEMOJI("1f36a"), label: "Cookie", correct: false },
                { url: TWEMOJI("1f369"), label: "Donut", correct: false }
            ]},
            { word: "Ice cream", chinese: "冰淇淋", emoji: "🍦", images: [
                { url: TWEMOJI("1f366"), label: "Ice cream", correct: true },
                { url: TWEMOJI("1f382"), label: "Cake", correct: false },
                { url: TWEMOJI("1f36d"), label: "Candy", correct: false }
            ]},
            { word: "Coffee", chinese: "咖啡", emoji: "☕", images: [
                { url: TWEMOJI("2615"), label: "Coffee", correct: true },
                { url: TWEMOJI("1f375"), label: "Tea", correct: false },
                { url: TWEMOJI("1f95b"), label: "Milk", correct: false }
            ]},
            { word: "Milk", chinese: "牛奶", emoji: "🥛", images: [
                { url: TWEMOJI("1f95b"), label: "Milk", correct: true },
                { url: TWEMOJI("2615"), label: "Coffee", correct: false },
                { url: TWEMOJI("1f9c3"), label: "Juice", correct: false }
            ]},
            { word: "Bread", chinese: "面包", emoji: "🍞", images: [
                { url: TWEMOJI("1f35e"), label: "Bread", correct: true },
                { url: TWEMOJI("1f382"), label: "Cake", correct: false },
                { url: TWEMOJI("1f36a"), label: "Cookie", correct: false }
            ]},
            { word: "Egg", chinese: "鸡蛋", emoji: "🥚", images: [
                { url: TWEMOJI("1f95a"), label: "Egg", correct: true },
                { url: TWEMOJI("1f373"), label: "Cooking", correct: false },
                { url: TWEMOJI("1f414"), label: "Chicken", correct: false }
            ]},
            { word: "Cheese", chinese: "奶酪", emoji: "🧀", images: [
                { url: TWEMOJI("1f9c0"), label: "Cheese", correct: true },
                { url: TWEMOJI("1f95b"), label: "Milk", correct: false },
                { url: TWEMOJI("1f35e"), label: "Bread", correct: false }
            ]},
            { word: "Chocolate", chinese: "巧克力", emoji: "🍫", images: [
                { url: TWEMOJI("1f36b"), label: "Chocolate", correct: true },
                { url: TWEMOJI("1f36c"), label: "Candy", correct: false },
                { url: TWEMOJI("1f36a"), label: "Cookie", correct: false }
            ]}
        ],

        // Animals (补充更多动物)
        "Animals": [
            { word: "Cat", chinese: "猫", emoji: "🐱", images: [
                { url: TWEMOJI("1f431"), label: "Cat", correct: true },
                { url: TWEMOJI("1f436"), label: "Dog", correct: false },
                { url: TWEMOJI("1f430"), label: "Rabbit", correct: false }
            ]},
            { word: "Dog", chinese: "狗", emoji: "🐶", images: [
                { url: TWEMOJI("1f436"), label: "Dog", correct: true },
                { url: TWEMOJI("1f431"), label: "Cat", correct: false },
                { url: TWEMOJI("1f43a"), label: "Wolf", correct: false }
            ]},
            { word: "Bird", chinese: "鸟", emoji: "🐦", images: [
                { url: TWEMOJI("1f426"), label: "Bird", correct: true },
                { url: TWEMOJI("1f985"), label: "Eagle", correct: false },
                { url: TWEMOJI("1f989"), label: "Owl", correct: false }
            ]},
            { word: "Fish", chinese: "鱼", emoji: "🐟", images: [
                { url: TWEMOJI("1f41f"), label: "Fish", correct: true },
                { url: TWEMOJI("1f420"), label: "Tropical Fish", correct: false },
                { url: TWEMOJI("1f421"), label: "Blowfish", correct: false }
            ]},
            { word: "Elephant", chinese: "大象", emoji: "🐘", images: [
                { url: TWEMOJI("1f418"), label: "Elephant", correct: true },
                { url: TWEMOJI("1f98f"), label: "Rhino", correct: false },
                { url: TWEMOJI("1f992"), label: "Giraffe", correct: false }
            ]},
            { word: "Lion", chinese: "狮子", emoji: "🦁", images: [
                { url: TWEMOJI("1f981"), label: "Lion", correct: true },
                { url: TWEMOJI("1f42f"), label: "Tiger", correct: false },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false }
            ]},
            { word: "Tiger", chinese: "老虎", emoji: "🐯", images: [
                { url: TWEMOJI("1f42f"), label: "Tiger", correct: true },
                { url: TWEMOJI("1f981"), label: "Lion", correct: false },
                { url: TWEMOJI("1f406"), label: "Leopard", correct: false }
            ]},
            { word: "Monkey", chinese: "猴子", emoji: "🐵", images: [
                { url: TWEMOJI("1f435"), label: "Monkey", correct: true },
                { url: TWEMOJI("1f98d"), label: "Gorilla", correct: false },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false }
            ]},
            { word: "Rabbit", chinese: "兔子", emoji: "🐰", images: [
                { url: TWEMOJI("1f430"), label: "Rabbit", correct: true },
                { url: TWEMOJI("1f42d"), label: "Mouse", correct: false },
                { url: TWEMOJI("1f43f"), label: "Squirrel", correct: false }
            ]},
            { word: "Bear", chinese: "熊", emoji: "🐻", images: [
                { url: TWEMOJI("1f43b"), label: "Bear", correct: true },
                { url: TWEMOJI("1f43c"), label: "Panda", correct: false },
                { url: TWEMOJI("1f428"), label: "Koala", correct: false }
            ]},
            { word: "Panda", chinese: "熊猫", emoji: "🐼", images: [
                { url: TWEMOJI("1f43c"), label: "Panda", correct: true },
                { url: TWEMOJI("1f43b"), label: "Bear", correct: false },
                { url: TWEMOJI("1f428"), label: "Koala", correct: false }
            ]},
            { word: "Bee", chinese: "蜜蜂", emoji: "🐝", images: [
                { url: TWEMOJI("1f41d"), label: "Bee", correct: true },
                { url: TWEMOJI("1f98b"), label: "Butterfly", correct: false },
                { url: TWEMOJI("1f41e"), label: "Ladybug", correct: false }
            ]}
        ],

        // Sports
        "Sports": [
            { word: "Football", chinese: "足球", emoji: "⚽", images: [
                { url: TWEMOJI("26bd"), label: "Football", correct: true },
                { url: TWEMOJI("1f3c0"), label: "Basketball", correct: false },
                { url: TWEMOJI("1f3be"), label: "Tennis", correct: false }
            ]},
            { word: "Basketball", chinese: "篮球", emoji: "🏀", images: [
                { url: TWEMOJI("1f3c0"), label: "Basketball", correct: true },
                { url: TWEMOJI("26bd"), label: "Football", correct: false },
                { url: TWEMOJI("1f3d0"), label: "Volleyball", correct: false }
            ]},
            { word: "Tennis", chinese: "网球", emoji: "🎾", images: [
                { url: TWEMOJI("1f3be"), label: "Tennis", correct: true },
                { url: TWEMOJI("1f3f8"), label: "Badminton", correct: false },
                { url: TWEMOJI("1f3d3"), label: "Ping Pong", correct: false }
            ]},
            { word: "Swimming", chinese: "游泳", emoji: "🏊", images: [
                { url: TWEMOJI("1f3ca"), label: "Swimming", correct: true },
                { url: TWEMOJI("1f3c4"), label: "Surfing", correct: false },
                { url: TWEMOJI("1f6a3"), label: "Rowing", correct: false }
            ]},
            { word: "Running", chinese: "跑步", emoji: "🏃", images: [
                { url: TWEMOJI("1f3c3"), label: "Running", correct: true },
                { url: TWEMOJI("1f6b6"), label: "Walking", correct: false },
                { url: TWEMOJI("1f6b4"), label: "Cycling", correct: false }
            ]},
            { word: "Cycling", chinese: "骑自行车", emoji: "🚴", images: [
                { url: TWEMOJI("1f6b4"), label: "Cycling", correct: true },
                { url: TWEMOJI("1f3c3"), label: "Running", correct: false },
                { url: TWEMOJI("1f3c7"), label: "Horse Racing", correct: false }
            ]}
        ],

        // Weather
        "Weather": [
            { word: "Sun", chinese: "太阳", emoji: "☀️", images: [
                { url: TWEMOJI("2600"), label: "Sun", correct: true },
                { url: TWEMOJI("1f319"), label: "Moon", correct: false },
                { url: TWEMOJI("2b50"), label: "Star", correct: false }
            ]},
            { word: "Rain", chinese: "雨", emoji: "🌧️", images: [
                { url: TWEMOJI("1f327"), label: "Rain", correct: true },
                { url: TWEMOJI("2614"), label: "Umbrella", correct: false },
                { url: TWEMOJI("1f4a7"), label: "Droplet", correct: false }
            ]},
            { word: "Snow", chinese: "雪", emoji: "❄️", images: [
                { url: TWEMOJI("2744"), label: "Snow", correct: true },
                { url: TWEMOJI("26c4"), label: "Snowman", correct: false },
                { url: TWEMOJI("1f328"), label: "Cloud", correct: false }
            ]},
            { word: "Cloud", chinese: "云", emoji: "☁️", images: [
                { url: TWEMOJI("2601"), label: "Cloud", correct: true },
                { url: TWEMOJI("1f327"), label: "Rain", correct: false },
                { url: TWEMOJI("1f329"), label: "Lightning", correct: false }
            ]},
            { word: "Wind", chinese: "风", emoji: "💨", images: [
                { url: TWEMOJI("1f4a8"), label: "Wind", correct: true },
                { url: TWEMOJI("1f32a"), label: "Tornado", correct: false },
                { url: TWEMOJI("2601"), label: "Cloud", correct: false }
            ]}
        ],

        // Transport
        "Transport": [
            { word: "Car", chinese: "汽车", emoji: "🚗", images: [
                { url: TWEMOJI("1f697"), label: "Car", correct: true },
                { url: TWEMOJI("1f68c"), label: "Bus", correct: false },
                { url: TWEMOJI("1f69a"), label: "Truck", correct: false }
            ]},
            { word: "Bus", chinese: "公交车", emoji: "🚌", images: [
                { url: TWEMOJI("1f68c"), label: "Bus", correct: true },
                { url: TWEMOJI("1f697"), label: "Car", correct: false },
                { url: TWEMOJI("1f682"), label: "Train", correct: false }
            ]},
            { word: "Train", chinese: "火车", emoji: "🚂", images: [
                { url: TWEMOJI("1f682"), label: "Train", correct: true },
                { url: TWEMOJI("1f68c"), label: "Bus", correct: false },
                { url: TWEMOJI("1f687"), label: "Metro", correct: false }
            ]},
            { word: "Plane", chinese: "飞机", emoji: "✈️", images: [
                { url: TWEMOJI("2708"), label: "Plane", correct: true },
                { url: TWEMOJI("1f681"), label: "Helicopter", correct: false },
                { url: TWEMOJI("1f680"), label: "Rocket", correct: false }
            ]},
            { word: "Boat", chinese: "船", emoji: "⛵", images: [
                { url: TWEMOJI("26f5"), label: "Boat", correct: true },
                { url: TWEMOJI("1f6a2"), label: "Ship", correct: false },
                { url: TWEMOJI("1f6a4"), label: "Speedboat", correct: false }
            ]},
            { word: "Bicycle", chinese: "自行车", emoji: "🚲", images: [
                { url: TWEMOJI("1f6b2"), label: "Bicycle", correct: true },
                { url: TWEMOJI("1f6f4"), label: "Scooter", correct: false },
                { url: TWEMOJI("1f3cd"), label: "Motorcycle", correct: false }
            ]},
            { word: "Taxi", chinese: "出租车", emoji: "🚕", images: [
                { url: TWEMOJI("1f695"), label: "Taxi", correct: true },
                { url: TWEMOJI("1f697"), label: "Car", correct: false },
                { url: TWEMOJI("1f68c"), label: "Bus", correct: false }
            ]}
        ],

        // Colours
        "Colours": [
            createWordEntry("Black", "黑色", "⚫"),
            createWordEntry("Golden", "金色", "🟡"),
            createWordEntry("Orange", "橙色", "🟠"),
            createWordEntry("Red", "红色", "🔴"),
            createWordEntry("Blue", "蓝色", "🔵"),
            createWordEntry("Green", "绿色", "🟢"),
            createWordEntry("Pale", "浅色", "⚪"),
            createWordEntry("Silver", "银色", "⚪"),
            createWordEntry("Brown", "棕色", "🟤"),
            createWordEntry("Grey", "灰色", "⚫"),
            createWordEntry("Pink", "粉色", "🩷"),
            createWordEntry("White", "白色", "⚪"),
            createWordEntry("Dark", "深色", "⚫"),
            createWordEntry("Light", "浅色", "💡"),
            createWordEntry("Purple", "紫色", "🟣"),
            createWordEntry("Yellow", "黄色", "🟡")
        ],

        // Communication
        "Communication": [
            createWordEntry("Address", "地址", "📮"),
            createWordEntry("Digital", "数字的", "💻"),
            createWordEntry("Screen", "屏幕", "📱"),
            createWordEntry("Download", "下载", "⬇️"),
            createWordEntry("Mouse", "鼠标", "🖱️"),
            createWordEntry("Tablet", "平板", "📱"),
            createWordEntry("Call", "打电话", "📞"),
            createWordEntry("Email", "电子邮件", "📧"),
            createWordEntry("Password", "密码", "🔐"),
            createWordEntry("Text", "文本", "📝"),
            createWordEntry("Chat", "聊天", "💬"),
            createWordEntry("File", "文件", "📁"),
            createWordEntry("Web", "网络", "🌐"),
            createWordEntry("Click", "点击", "👆"),
            createWordEntry("Information", "信息", "ℹ️"),
            createWordEntry("Internet", "互联网", "🌐"),
            createWordEntry("Printer", "打印机", "🖨️"),
            createWordEntry("Keyboard", "键盘", "⌨️"),
            createWordEntry("Online", "在线", "🌐"),
            createWordEntry("Software", "软件", "💿")
        ],

        // Documents
        "Documents": [
            createWordEntry("Advertisement", "广告", "📰"),
            createWordEntry("Diary", "日记", "📔"),
            createWordEntry("Magazine", "杂志", "📰"),
            createWordEntry("Passport", "护照", "📕"),
            createWordEntry("Article", "文章", "📄"),
            createWordEntry("Diploma", "文凭", "📜"),
            createWordEntry("Menu", "菜单", "📋"),
            createWordEntry("Postcard", "明信片", "📮"),
            createWordEntry("Bill", "账单", "🧾"),
            createWordEntry("Form", "表格", "📋"),
            createWordEntry("Newspaper", "报纸", "📰"),
            createWordEntry("Project", "项目", "📊"),
            createWordEntry("Card", "卡片", "💳"),
            createWordEntry("Letter", "信", "✉️"),
            createWordEntry("Note", "笔记", "📝"),
            createWordEntry("Textbook", "教科书", "📚"),
            createWordEntry("Comic", "漫画", "📖"),
            createWordEntry("Licence", "执照", "📜"),
            createWordEntry("Notebook", "笔记本", "📓"),
            createWordEntry("Ticket", "票", "🎫")
        ],

        // Education
        "Education": [
            createWordEntry("Advanced", "高级的", "📈"),
            createWordEntry("Course", "课程", "📚"),
            createWordEntry("Lesson", "课", "📖"),
            createWordEntry("Ruler", "尺子", "📏"),
            createWordEntry("Beginner", "初学者", "🔰"),
            createWordEntry("Desk", "书桌", "🪑"),
            createWordEntry("Level", "水平", "📊"),
            createWordEntry("School", "学校", "🏫"),
            createWordEntry("Biology", "生物", "🧬"),
            createWordEntry("Dictionary", "字典", "📖"),
            createWordEntry("Library", "图书馆", "📚"),
            createWordEntry("Science", "科学", "🔬"),
            createWordEntry("Blackboard", "黑板", "⬛"),
            createWordEntry("Eraser", "橡皮", "🧽"),
            createWordEntry("Maths", "数学", "🔢"),
            createWordEntry("Studies", "学习", "📚"),
            createWordEntry("Book", "书", "📕"),
            createWordEntry("Exam", "考试", "📝"),
            createWordEntry("Study", "学习", "📖"),
            createWordEntry("Bookshelf", "书架", "📚"),
            createWordEntry("Geography", "地理", "🌍"),
            createWordEntry("Physics", "物理", "⚛️"),
            createWordEntry("Subject", "科目", "📚"),
            createWordEntry("Chemistry", "化学", "🧪"),
            createWordEntry("History", "历史", "📜"),
            createWordEntry("Practice", "练习", "✍️"),
            createWordEntry("Teach", "教", "👨‍🏫"),
            createWordEntry("Class", "班级", "🏫"),
            createWordEntry("Homework", "作业", "📝"),
            createWordEntry("Pupil", "学生", "👨‍🎓"),
            createWordEntry("Test", "测试", "📝"),
            createWordEntry("Clever", "聪明的", "🧠"),
            createWordEntry("Know", "知道", "💡"),
            createWordEntry("Read", "阅读", "📖"),
            createWordEntry("University", "大学", "🎓"),
            createWordEntry("Coach", "教练", "👨‍🏫"),
            createWordEntry("Language", "语言", "🗣️"),
            createWordEntry("Remember", "记住", "🧠"),
            createWordEntry("College", "学院", "🏫"),
            createWordEntry("Learn", "学习", "📚"),
            createWordEntry("Rubber", "橡皮", "🧽")
        ],

        // Entertainment
        "Entertainment": [
            createWordEntry("Act", "表演", "🎭"),
            createWordEntry("Draw", "画", "🎨"),
            createWordEntry("Museum", "博物馆", "🏛️"),
            createWordEntry("Programme", "节目", "📺"),
            createWordEntry("Actor", "演员", "🎭"),
            createWordEntry("Drawing", "绘画", "🎨"),
            createWordEntry("Music", "音乐", "🎵"),
            createWordEntry("Adventure", "冒险", "🗺️"),
            createWordEntry("Disco", "迪斯科", "💃"),
            createWordEntry("Musician", "音乐家", "🎵"),
            createWordEntry("Art", "艺术", "🎨"),
            createWordEntry("Exhibition", "展览", "🖼️"),
            createWordEntry("News", "新闻", "📰"),
            createWordEntry("Rock", "摇滚", "🎸"),
            createWordEntry("Festival", "节日", "🎉"),
            createWordEntry("Opera", "歌剧", "🎭"),
            createWordEntry("Show", "表演", "🎪"),
            createWordEntry("Cartoon", "卡通", "📺"),
            createWordEntry("Film", "电影", "🎬"),
            createWordEntry("Paint", "绘画", "🎨"),
            createWordEntry("Sing", "唱歌", "🎤"),
            createWordEntry("Fun", "乐趣", "😄"),
            createWordEntry("Painter", "画家", "🎨"),
            createWordEntry("Singer", "歌手", "🎤"),
            createWordEntry("Group", "组", "👥"),
            createWordEntry("Photograph", "照片", "📷"),
            createWordEntry("Song", "歌曲", "🎵"),
            createWordEntry("Chess", "国际象棋", "♟️"),
            createWordEntry("Guitar", "吉他", "🎸"),
            createWordEntry("Photography", "摄影", "📷"),
            createWordEntry("Theatre", "剧院", "🎭"),
            createWordEntry("Cinema", "电影院", "🎬"),
            createWordEntry("Hip hop", "嘻哈", "🎵"),
            createWordEntry("Piano", "钢琴", "🎹"),
            createWordEntry("Classical music", "古典音乐", "🎼"),
            createWordEntry("Instrument", "乐器", "🎸"),
            createWordEntry("Picture", "图片", "🖼️"),
            createWordEntry("Video game", "电子游戏", "🎮"),
            createWordEntry("Concert", "音乐会", "🎵"),
            createWordEntry("Laugh", "笑", "😂"),
            createWordEntry("Pop", "流行音乐", "🎵"),
            createWordEntry("Watch", "观看", "👀"),
            createWordEntry("Dance", "跳舞", "💃"),
            createWordEntry("Listen to", "听", "👂"),
            createWordEntry("Dancer", "舞者", "💃"),
            createWordEntry("Look at", "看", "👀")
        ],

        // Family
        "Family": [
            createWordEntry("Aunt", "阿姨", "👩"),
            createWordEntry("Girl", "女孩", "👧"),
            createWordEntry("Group", "组", "👥"),
            createWordEntry("Mum", "妈妈", "👩"),
            createWordEntry("Boy", "男孩", "👦"),
            createWordEntry("Grandchild", "孙子", "👶"),
            createWordEntry("Guest", "客人", "👤"),
            createWordEntry("Neighbour", "邻居", "👥"),
            createWordEntry("Brother", "兄弟", "👦"),
            createWordEntry("Granddad", "爷爷", "👴"),
            createWordEntry("Guy", "家伙", "👨"),
            createWordEntry("Parent", "父母", "👨‍👩‍👧"),
            createWordEntry("Child", "孩子", "👶"),
            createWordEntry("Granddaughter", "孙女", "👧"),
            createWordEntry("Husband", "丈夫", "👨"),
            createWordEntry("Penfriend", "笔友", "✉️"),
            createWordEntry("Cousin", "表兄弟", "👦"),
            createWordEntry("Grandfather", "祖父", "👴"),
            createWordEntry("Love", "爱", "❤️"),
            createWordEntry("Sister", "姐妹", "👧"),
            createWordEntry("Dad", "爸爸", "👨"),
            createWordEntry("Grandma", "奶奶", "👵"),
            createWordEntry("Married", "已婚", "💍"),
            createWordEntry("Son", "儿子", "👦"),
            createWordEntry("Daughter", "女儿", "👧"),
            createWordEntry("Grandmother", "祖母", "👵"),
            createWordEntry("Miss", "小姐", "👧"),
            createWordEntry("Surname", "姓", "📝"),
            createWordEntry("Family", "家庭", "👨‍👩‍👧‍👦"),
            createWordEntry("Grandpa", "爷爷", "👴"),
            createWordEntry("Mother", "母亲", "👩"),
            createWordEntry("Teenager", "青少年", "👦"),
            createWordEntry("Father", "父亲", "👨"),
            createWordEntry("Grandparent", "祖父母", "👴👵"),
            createWordEntry("Mr", "先生", "👨"),
            createWordEntry("Uncle", "叔叔", "👨"),
            createWordEntry("Friend", "朋友", "👥"),
            createWordEntry("Grandson", "孙子", "👦"),
            createWordEntry("Mrs", "夫人", "👩"),
            createWordEntry("Wife", "妻子", "👩"),
            createWordEntry("Friendly", "友好的", "😊"),
            createWordEntry("Granny", "奶奶", "👵"),
            createWordEntry("Ms", "女士", "👩")
        ],

        // Health
        "Health": [
            createWordEntry("Accident", "事故", "🚑"),
            createWordEntry("Danger", "危险", "⚠️"),
            createWordEntry("Hair", "头发", "💇"),
            createWordEntry("Problem", "问题", "❓"),
            createWordEntry("Ambulance", "救护车", "🚑"),
            createWordEntry("Dangerous", "危险的", "⚠️"),
            createWordEntry("Hand", "手", "✋"),
            createWordEntry("Rest", "休息", "😴"),
            createWordEntry("Appointment", "预约", "📅"),
            createWordEntry("Dead", "死的", "💀"),
            createWordEntry("Head", "头", "🗣️"),
            createWordEntry("Run", "跑", "🏃"),
            createWordEntry("Arm", "手臂", "💪"),
            createWordEntry("Dentist", "牙医", "🦷"),
            createWordEntry("Health", "健康", "❤️"),
            createWordEntry("Sick", "生病的", "🤒"),
            createWordEntry("Baby", "婴儿", "👶"),
            createWordEntry("Die", "死", "💀"),
            createWordEntry("Hear", "听", "👂"),
            createWordEntry("Soap", "肥皂", "🧼"),
            createWordEntry("Back", "背部", "🔙"),
            createWordEntry("Doctor", "医生", "👨‍⚕️"),
            createWordEntry("Heart", "心脏", "❤️"),
            createWordEntry("Stomach", "胃", "🤰"),
            createWordEntry("Blood", "血", "🩸"),
            createWordEntry("Ear", "耳朵", "👂"),
            createWordEntry("Hospital", "医院", "🏥"),
            createWordEntry("Stomach ache", "胃痛", "🤒"),
            createWordEntry("Body", "身体", "🧍"),
            createWordEntry("Exercise", "锻炼", "🏃"),
            createWordEntry("Ill", "生病的", "🤒"),
            createWordEntry("Swim", "游泳", "🏊"),
            createWordEntry("Brain", "大脑", "🧠"),
            createWordEntry("Eye", "眼睛", "👁️"),
            createWordEntry("Temperature", "温度", "🌡️"),
            createWordEntry("Break", "打破", "💔"),
            createWordEntry("Leg", "腿", "🦵"),
            createWordEntry("Tired", "累的", "😴"),
            createWordEntry("Check", "检查", "✅"),
            createWordEntry("Face", "脸", "😊"),
            createWordEntry("Lie down", "躺下", "🛏️"),
            createWordEntry("Tooth", "牙齿", "🦷"),
            createWordEntry("Chemist", "药剂师", "💊"),
            createWordEntry("Fall", "跌倒", "🤕"),
            createWordEntry("Medicine", "药", "💊"),
            createWordEntry("Toothache", "牙痛", "🦷"),
            createWordEntry("Clean", "清洁", "🧹"),
            createWordEntry("Feel", "感觉", "🤗"),
            createWordEntry("Neck", "脖子", "🧣"),
            createWordEntry("Toothbrush", "牙刷", "🪥"),
            createWordEntry("Cold", "感冒", "🤧"),
            createWordEntry("Finger", "手指", "👆"),
            createWordEntry("Nose", "鼻子", "👃"),
            createWordEntry("Walk", "走", "🚶"),
            createWordEntry("Comb", "梳子", "💇"),
            createWordEntry("Fit", "健康的", "💪"),
            createWordEntry("Nurse", "护士", "👩‍⚕️"),
            createWordEntry("Well", "健康的", "😊"),
            createWordEntry("Cut", "切", "🔪"),
            createWordEntry("Foot", "脚", "🦶"),
            createWordEntry("Pain", "疼痛", "😣")
        ],

        // Hobbies
        "Hobbies": [
            createWordEntry("Barbecue", "烧烤", "🍖"),
            createWordEntry("Go shopping", "购物", "🛍️"),
            createWordEntry("Beach", "海滩", "🏖️"),
            createWordEntry("Club", "俱乐部", "🎪"),
            createWordEntry("Bicycle", "自行车", "🚲"),
            createWordEntry("Collect", "收集", "📦"),
            createWordEntry("Hobby", "爱好", "🎨"),
            createWordEntry("Bike", "自行车", "🚲"),
            createWordEntry("Camping", "露营", "⛺"),
            createWordEntry("Join", "加入", "➕"),
            createWordEntry("Party", "派对", "🎉"),
            createWordEntry("Camp", "营地", "⛺"),
            createWordEntry("Member", "成员", "👥"),
            createWordEntry("Quiz", "测验", "❓"),
            createWordEntry("Campsite", "营地", "⛺"),
            createWordEntry("Tent", "帐篷", "⛺"),
            createWordEntry("Go out", "外出", "🚪")
        ],

        // House
        "House": [
            createWordEntry("Address", "地址", "📮"),
            createWordEntry("Furniture", "家具", "🪑"),
            createWordEntry("Apartment", "公寓", "🏢"),
            createWordEntry("Garage", "车库", "🚗"),
            createWordEntry("Pillow", "枕头", "🛏️"),
            createWordEntry("Armchair", "扶手椅", "🪑"),
            createWordEntry("Garden", "花园", "🌻"),
            createWordEntry("Refrigerator", "冰箱", "🧊"),
            createWordEntry("Bath", "浴缸", "🛁"),
            createWordEntry("Bathtub", "浴缸", "🛁"),
            createWordEntry("Cupboard", "橱柜", "🗄️"),
            createWordEntry("Gas", "煤气", "🔥"),
            createWordEntry("Roof", "屋顶", "🏠"),
            createWordEntry("Bathroom", "浴室", "🚿"),
            createWordEntry("Curtain", "窗帘", "🪟"),
            createWordEntry("Gate", "大门", "🚪"),
            createWordEntry("Room", "房间", "🏠"),
            createWordEntry("Bed", "床", "🛏️"),
            createWordEntry("Dining room", "餐厅", "🍽️"),
            createWordEntry("Hall", "大厅", "🏛️"),
            createWordEntry("Rubbish", "垃圾", "🗑️"),
            createWordEntry("Bedroom", "卧室", "🛏️"),
            createWordEntry("Door", "门", "🚪"),
            createWordEntry("Home", "家", "🏠"),
            createWordEntry("Safe", "安全的", "🔒"),
            createWordEntry("Bin", "垃圾桶", "🗑️"),
            createWordEntry("Downstairs", "楼下", "⬇️"),
            createWordEntry("Shelf", "架子", "📚"),
            createWordEntry("Blanket", "毯子", "🛏️"),
            createWordEntry("House", "房子", "🏠"),
            createWordEntry("Shower", "淋浴", "🚿"),
            createWordEntry("Bookcase", "书柜", "📚"),
            createWordEntry("Drawer", "抽屉", "🗄️"),
            createWordEntry("Key", "钥匙", "🔑"),
            createWordEntry("Sink", "水槽", "🚰"),
            createWordEntry("Entrance", "入口", "🚪"),
            createWordEntry("Sitting room", "客厅", "🛋️"),
            createWordEntry("Flat", "公寓", "🏢"),
            createWordEntry("Light", "灯", "💡"),
            createWordEntry("Sofa", "沙发", "🛋️"),
            createWordEntry("Floor", "地板", "🏠"),
            createWordEntry("Live", "居住", "🏠"),
            createWordEntry("Stay", "停留", "🏠"),
            createWordEntry("Carpet", "地毯", "🧶"),
            createWordEntry("Living room", "客厅", "🛋️"),
            createWordEntry("Toilet", "厕所", "🚽"),
            createWordEntry("Chair", "椅子", "🪑"),
            createWordEntry("Towel", "毛巾", "🧻")
        ],

        // Measurements
        "Measurements": [
            createWordEntry("Centimetre", "厘米", "📏"),
            createWordEntry("Half", "一半", "½"),
            createWordEntry("Metre", "米", "📏"),
            createWordEntry("Temperature", "温度", "🌡️"),
            createWordEntry("Hour", "小时", "⏰"),
            createWordEntry("Minute", "分钟", "⏱️"),
            createWordEntry("Week", "周", "📅"),
            createWordEntry("Day", "天", "📅"),
            createWordEntry("Kilogramme", "千克", "⚖️"),
            createWordEntry("Moment", "时刻", "⏰"),
            createWordEntry("Year", "年", "📅"),
            createWordEntry("Degree", "度", "🌡️"),
            createWordEntry("Kilometre", "千米", "📏"),
            createWordEntry("Quarter", "四分之一", "¼"),
            createWordEntry("Gramme", "克", "⚖️"),
            createWordEntry("Litre", "升", "🥤"),
            createWordEntry("Second", "秒", "⏱️")
        ],

        // Feelings
        "Feelings": [
            createWordEntry("Able", "能够", "💪"),
            createWordEntry("Excellent", "优秀的", "⭐"),
            createWordEntry("Lovely", "可爱的", "😍"),
            createWordEntry("Special", "特别的", "✨"),
            createWordEntry("Afraid", "害怕的", "😨"),
            createWordEntry("Excited", "兴奋的", "🤩"),
            createWordEntry("Lucky", "幸运的", "🍀"),
            createWordEntry("Strange", "奇怪的", "🤔"),
            createWordEntry("Alone", "独自的", "😔"),
            createWordEntry("Amazing", "惊人的", "😮"),
            createWordEntry("Famous", "著名的", "⭐"),
            createWordEntry("Fast", "快的", "⚡"),
            createWordEntry("Modern", "现代的", "🆕"),
            createWordEntry("Sure", "确定的", "✅"),
            createWordEntry("Angry", "生气的", "😠"),
            createWordEntry("Favourite", "最喜欢的", "❤️"),
            createWordEntry("Nice", "好的", "😊"),
            createWordEntry("Bad", "坏的", "👎"),
            createWordEntry("Fine", "好的", "👍"),
            createWordEntry("Noisy", "吵闹的", "🔊"),
            createWordEntry("Tall", "高的", "📏"),
            createWordEntry("Beautiful", "美丽的", "😍"),
            createWordEntry("Free", "自由的", "🆓"),
            createWordEntry("Old", "老的", "👴"),
            createWordEntry("Terrible", "可怕的", "😱"),
            createWordEntry("Better", "更好的", "👍"),
            createWordEntry("Pleasant", "愉快的", "😊"),
            createWordEntry("Big", "大的", "📏"),
            createWordEntry("Funny", "有趣的", "😂"),
            createWordEntry("Poor", "贫穷的", "💸"),
            createWordEntry("Unhappy", "不开心的", "😢"),
            createWordEntry("Bored", "无聊的", "😴"),
            createWordEntry("Good", "好的", "👍"),
            createWordEntry("Pretty", "漂亮的", "😊"),
            createWordEntry("Useful", "有用的", "✅"),
            createWordEntry("Boring", "无聊的", "😴"),
            createWordEntry("Great", "伟大的", "👍"),
            createWordEntry("Quick", "快的", "⚡"),
            createWordEntry("Brave", "勇敢的", "🦁"),
            createWordEntry("Happy", "快乐的", "😊"),
            createWordEntry("Quiet", "安静的", "🤫"),
            createWordEntry("Worried", "担心的", "😟"),
            createWordEntry("Brilliant", "聪明的", "💡"),
            createWordEntry("Hard", "困难的", "💪"),
            createWordEntry("Ready", "准备好的", "✅"),
            createWordEntry("Wrong", "错误的", "❌"),
            createWordEntry("Busy", "忙碌的", "⏰"),
            createWordEntry("Heavy", "重的", "⚖️"),
            createWordEntry("Real", "真实的", "✅"),
            createWordEntry("Young", "年轻的", "👶"),
            createWordEntry("Careful", "小心的", "⚠️"),
            createWordEntry("High", "高的", "📏"),
            createWordEntry("Rich", "富有的", "💰"),
            createWordEntry("Clear", "清楚的", "✅"),
            createWordEntry("Important", "重要的", "⭐"),
            createWordEntry("Slow", "慢的", "🐌"),
            createWordEntry("Cool", "酷的", "😎"),
            createWordEntry("Interested", "感兴趣的", "🤔"),
            createWordEntry("Small", "小的", "📏"),
            createWordEntry("Different", "不同的", "🔄"),
            createWordEntry("Interesting", "有趣的", "🤔"),
            createWordEntry("Soft", "软的", "🧸"),
            createWordEntry("Difficult", "困难的", "😓"),
            createWordEntry("Kind", "善良的", "❤️"),
            createWordEntry("Sorry", "抱歉的", "😔")
        ],

        // Buildings
        "Buildings": [
            createWordEntry("Apartment building", "公寓楼", "🏢"),
            createWordEntry("Department store", "百货商店", "🏬"),
            createWordEntry("Hotel", "酒店", "🏨"),
            createWordEntry("Shop", "商店", "🏪"),
            createWordEntry("Bank", "银行", "🏦"),
            createWordEntry("Block", "街区", "🏢"),
            createWordEntry("Elevator", "电梯", "🛗"),
            createWordEntry("Stadium", "体育场", "🏟️"),
            createWordEntry("Bookshop", "书店", "📚"),
            createWordEntry("Entrance", "入口", "🚪"),
            createWordEntry("Lift", "电梯", "🛗"),
            createWordEntry("Supermarket", "超市", "🏪"),
            createWordEntry("Bookstore", "书店", "📚"),
            createWordEntry("Exit", "出口", "🚪"),
            createWordEntry("Office", "办公室", "🏢"),
            createWordEntry("Building", "建筑", "🏢"),
            createWordEntry("Factory", "工厂", "🏭"),
            createWordEntry("Pharmacy", "药房", "💊"),
            createWordEntry("University", "大学", "🎓"),
            createWordEntry("Guest-house", "招待所", "🏠"),
            createWordEntry("Police station", "警察局", "🚔"),
            createWordEntry("Castle", "城堡", "🏰"),
            createWordEntry("Grocery store", "杂货店", "🏪"),
            createWordEntry("Post office", "邮局", "📮"),
            createWordEntry("Railway station", "火车站", "🚂"),
            createWordEntry("Swimming pool", "游泳池", "🏊")
        ],

        // Countryside
        "Countryside": [
            createWordEntry("Area", "地区", "🗺️"),
            createWordEntry("Forest", "森林", "🌲"),
            createWordEntry("Ocean", "海洋", "🌊"),
            createWordEntry("Sea", "海", "🌊"),
            createWordEntry("Campsite", "营地", "⛺"),
            createWordEntry("Hill", "山丘", "⛰️"),
            createWordEntry("Path", "小路", "🛤️"),
            createWordEntry("Sky", "天空", "☁️"),
            createWordEntry("Farm", "农场", "🚜"),
            createWordEntry("Island", "岛", "🏝️"),
            createWordEntry("Railway", "铁路", "🚂"),
            createWordEntry("Village", "村庄", "🏘️"),
            createWordEntry("Field", "田野", "🌾"),
            createWordEntry("Lake", "湖", "🏞️"),
            createWordEntry("Rainforest", "雨林", "🌴"),
            createWordEntry("Wood", "树林", "🌲"),
            createWordEntry("Mountain", "山", "⛰️"),
            createWordEntry("River", "河", "🏞️")
        ],

        // City
        "City": [
            createWordEntry("Airport", "机场", "✈️"),
            createWordEntry("City centre", "市中心", "🏙️"),
            createWordEntry("Petrol station", "加油站", "⛽"),
            createWordEntry("Station", "车站", "🚉"),
            createWordEntry("Bridge", "桥", "🌉"),
            createWordEntry("Corner", "角落", "📐"),
            createWordEntry("Playground", "操场", "🎪"),
            createWordEntry("Street", "街道", "🛣️"),
            createWordEntry("Bus station", "公交站", "🚌"),
            createWordEntry("Market", "市场", "🏪"),
            createWordEntry("Road", "路", "🛣️"),
            createWordEntry("Town", "城镇", "🏘️"),
            createWordEntry("Bus stop", "公交车站", "🚏"),
            createWordEntry("Motorway", "高速公路", "🛣️"),
            createWordEntry("Roundabout", "环岛", "🔄"),
            createWordEntry("Underground", "地铁", "🚇"),
            createWordEntry("Car park", "停车场", "🅿️"),
            createWordEntry("Park", "公园", "🌳"),
            createWordEntry("Square", "广场", "🏛️"),
            createWordEntry("Zoo", "动物园", "🦁")
        ],

        // Services
        "Services": [
            createWordEntry("Tourist information", "旅游信息", "ℹ️"),
            createWordEntry("Restaurant", "餐厅", "🍽️")
        ],

        // Shopping
        "Shopping": [
            createWordEntry("Cheque", "支票", "💳"),
            createWordEntry("Expensive", "昂贵的", "💰"),
            createWordEntry("Rent", "租", "🏠"),
            createWordEntry("Assistant", "助手", "👨‍💼"),
            createWordEntry("Close", "关闭", "🚪"),
            createWordEntry("For sale", "出售", "🏷️"),
            createWordEntry("Shop assistant", "店员", "👨‍💼"),
            createWordEntry("Closed", "关闭的", "🚪"),
            createWordEntry("Shopper", "购物者", "🛍️"),
            createWordEntry("Buy", "买", "💰"),
            createWordEntry("Open", "开放", "🚪"),
            createWordEntry("Credit card", "信用卡", "💳"),
            createWordEntry("Pay", "支付", "💰"),
            createWordEntry("Shopping", "购物", "🛍️"),
            createWordEntry("Cash", "现金", "💵"),
            createWordEntry("Customer", "顾客", "👤"),
            createWordEntry("Penny", "便士", "💰"),
            createWordEntry("Spend", "花费", "💸"),
            createWordEntry("Cent", "分", "💰"),
            createWordEntry("Dollar", "美元", "💵"),
            createWordEntry("Price", "价格", "💰"),
            createWordEntry("Store", "商店", "🏪"),
            createWordEntry("Cheap", "便宜的", "💰"),
            createWordEntry("Euro", "欧元", "💶"),
            createWordEntry("Receipt", "收据", "🧾"),
            createWordEntry("Try on", "试穿", "👕"),
            createWordEntry("Change", "零钱", "💰"),
            createWordEntry("Pound", "英镑", "💷")
        ],

        // Nature
        "Nature": [
            createWordEntry("Air", "空气", "💨"),
            createWordEntry("Fire", "火", "🔥"),
            createWordEntry("Moon", "月亮", "🌙"),
            createWordEntry("Star", "星星", "⭐"),
            createWordEntry("Autumn", "秋天", "🍂"),
            createWordEntry("Flower", "花", "🌸"),
            createWordEntry("North", "北", "🧭"),
            createWordEntry("Summer", "夏天", "☀️"),
            createWordEntry("Country", "国家", "🗺️"),
            createWordEntry("Grow", "生长", "🌱"),
            createWordEntry("River", "河", "🏞️"),
            createWordEntry("West", "西", "🧭"),
            createWordEntry("Countryside", "乡村", "🌾"),
            createWordEntry("Hot", "热的", "🔥"),
            createWordEntry("South", "南", "🧭"),
            createWordEntry("Winter", "冬天", "❄️"),
            createWordEntry("Desert", "沙漠", "🏜️"),
            createWordEntry("Ice", "冰", "🧊"),
            createWordEntry("Space", "空间", "🌌"),
            createWordEntry("Wool", "羊毛", "🐑"),
            createWordEntry("East", "东", "🧭"),
            createWordEntry("Spring", "春天", "🌸"),
            createWordEntry("World", "世界", "🌍"),
            createWordEntry("Explorer", "探险家", "🗺️"),
            createWordEntry("Plant", "植物", "🌱"),
            createWordEntry("Tree", "树", "🌳"),
            createWordEntry("Water", "水", "💧"),
            createWordEntry("Grass", "草", "🌿")
        ],

        // Time
        "Time": [
            createWordEntry("Afternoon", "下午", "🌆"),
            createWordEntry("Evening", "晚上", "🌃"),
            createWordEntry("Morning", "早上", "🌅"),
            createWordEntry("Tonight", "今晚", "🌙"),
            createWordEntry("Past", "过去", "⏮️"),
            createWordEntry("Night", "夜晚", "🌙"),
            createWordEntry("Weekday", "工作日", "📅"),
            createWordEntry("Appointment", "预约", "📅"),
            createWordEntry("Holidays", "假期", "🏖️"),
            createWordEntry("Noon", "中午", "🕛"),
            createWordEntry("Weekend", "周末", "📅"),
            createWordEntry("Birthday", "生日", "🎂"),
            createWordEntry("January", "一月", "📅"),
            createWordEntry("February", "二月", "📅"),
            createWordEntry("March", "三月", "📅"),
            createWordEntry("April", "四月", "📅"),
            createWordEntry("May", "五月", "📅"),
            createWordEntry("June", "六月", "📅"),
            createWordEntry("July", "七月", "📅"),
            createWordEntry("August", "八月", "📅"),
            createWordEntry("September", "九月", "📅"),
            createWordEntry("October", "十月", "📅"),
            createWordEntry("November", "十一月", "📅"),
            createWordEntry("December", "十二月", "📅"),
            createWordEntry("Weekly", "每周", "📅"),
            createWordEntry("Calendar", "日历", "📅"),
            createWordEntry("Meeting", "会议", "👥"),
            createWordEntry("Century", "世纪", "💯"),
            createWordEntry("Midnight", "午夜", "🌙"),
            createWordEntry("Working hours", "工作时间", "⏰"),
            createWordEntry("Daily", "每天", "📅"),
            createWordEntry("Yesterday", "昨天", "📅"),
            createWordEntry("Date", "日期", "📅"),
            createWordEntry("Monday", "星期一", "📅"),
            createWordEntry("Tuesday", "星期二", "📅"),
            createWordEntry("Wednesday", "星期三", "📅"),
            createWordEntry("Thursday", "星期四", "📅"),
            createWordEntry("Friday", "星期五", "📅"),
            createWordEntry("Saturday", "星期六", "📅"),
            createWordEntry("Sunday", "星期日", "📅"),
            createWordEntry("Time", "时间", "⏰"),
            createWordEntry("Month", "月", "📅"),
            createWordEntry("Today", "今天", "📅"),
            createWordEntry("Diary", "日记", "📔"),
            createWordEntry("Monthly", "每月", "📅"),
            createWordEntry("Tomorrow", "明天", "📅")
        ],

        // Travel
        "Travel": [
            createWordEntry("Aeroplane", "飞机", "✈️"),
            createWordEntry("Explorer", "探险家", "🗺️"),
            createWordEntry("Passenger", "乘客", "👤"),
            createWordEntry("Suitcase", "手提箱", "🧳"),
            createWordEntry("Far", "远的", "📏"),
            createWordEntry("Flight", "航班", "✈️"),
            createWordEntry("Passport", "护照", "📕"),
            createWordEntry("Fly", "飞", "✈️"),
            createWordEntry("Petrol", "汽油", "⛽"),
            createWordEntry("Tour", "旅游", "🗺️"),
            createWordEntry("Helicopter", "直升机", "🚁"),
            createWordEntry("Pilot", "飞行员", "👨‍✈️"),
            createWordEntry("Tour guide", "导游", "👨‍🏫"),
            createWordEntry("Tourist", "游客", "👤"),
            createWordEntry("Journey", "旅程", "🗺️"),
            createWordEntry("Platform", "站台", "🚉"),
            createWordEntry("Leave", "离开", "🚪"),
            createWordEntry("Repair", "修理", "🔧"),
            createWordEntry("Traffic", "交通", "🚦"),
            createWordEntry("Case", "箱子", "🧳"),
            createWordEntry("Luggage", "行李", "🧳"),
            createWordEntry("Right", "右", "➡️"),
            createWordEntry("Traffic light", "交通灯", "🚦"),
            createWordEntry("Coach", "长途汽车", "🚌"),
            createWordEntry("Machine", "机器", "⚙️"),
            createWordEntry("Tram", "电车", "🚊"),
            createWordEntry("Country", "国家", "🗺️"),
            createWordEntry("Map", "地图", "🗺️"),
            createWordEntry("Travel", "旅行", "✈️"),
            createWordEntry("Delay", "延迟", "⏰"),
            createWordEntry("Mechanic", "机械师", "🔧"),
            createWordEntry("Trip", "旅行", "🗺️"),
            createWordEntry("Delayed", "延迟的", "⏰"),
            createWordEntry("Mirror", "镜子", "🪞"),
            createWordEntry("Tyre", "轮胎", "🛞"),
            createWordEntry("Drive", "驾驶", "🚗"),
            createWordEntry("Motorbike", "摩托车", "🏍️"),
            createWordEntry("Seat", "座位", "💺"),
            createWordEntry("Visit", "访问", "🏛️"),
            createWordEntry("Driver", "司机", "👨‍✈️"),
            createWordEntry("Miss", "错过", "❌"),
            createWordEntry("Ship", "船", "🚢"),
            createWordEntry("Visitor", "访客", "👤"),
            createWordEntry("Driving licence", "驾照", "📜"),
            createWordEntry("Move", "移动", "🚶"),
            createWordEntry("Stop", "停止", "🛑"),
            createWordEntry("Way", "路", "🛣️"),
            createWordEntry("Engine", "引擎", "⚙️"),
            createWordEntry("Oil", "油", "🛢️"),
            createWordEntry("Straight on", "直走", "⬆️"),
            createWordEntry("Wheel", "轮子", "🛞"),
            createWordEntry("Engineer", "工程师", "👨‍🔧"),
            createWordEntry("Left", "左", "⬅️"),
            createWordEntry("Window", "窗户", "🪟")
        ],

        // Work
        "Work": [
            createWordEntry("Journalist", "记者", "📰"),
            createWordEntry("Secretary", "秘书", "👨‍💼"),
            createWordEntry("Artist", "艺术家", "🎨"),
            createWordEntry("King", "国王", "👑"),
            createWordEntry("Boss", "老板", "👨‍💼"),
            createWordEntry("Letter", "信", "✉️"),
            createWordEntry("Manager", "经理", "👨‍💼"),
            createWordEntry("Break", "休息", "☕"),
            createWordEntry("Earn", "赚", "💰"),
            createWordEntry("Staff", "员工", "👥"),
            createWordEntry("Business", "商业", "💼"),
            createWordEntry("Businessman", "商人", "👨‍💼"),
            createWordEntry("Businesswoman", "女商人", "👩‍💼"),
            createWordEntry("Cleaner", "清洁工", "🧹"),
            createWordEntry("Occupation", "职业", "💼"),
            createWordEntry("Uniform", "制服", "👔"),
            createWordEntry("Company", "公司", "🏢"),
            createWordEntry("Farmer", "农民", "👨‍🌾"),
            createWordEntry("Work", "工作", "💼"),
            createWordEntry("Cook", "厨师", "👨‍🍳"),
            createWordEntry("Footballer", "足球运动员", "⚽"),
            createWordEntry("Worker", "工人", "👷"),
            createWordEntry("Guide", "导游", "👨‍🏫"),
            createWordEntry("Police officer", "警察", "👮"),
            createWordEntry("Writer", "作家", "✍️"),
            createWordEntry("Job", "工作", "💼"),
            createWordEntry("Receptionist", "接待员", "👨‍💼"),
            createWordEntry("Instructions", "说明", "📋"),
            createWordEntry("Queen", "女王", "👑")
        ],

        // Food Extended
        "Food Extended": [
            createWordEntry("Bake", "烘烤", "🍞"),
            createWordEntry("Hungry", "饿的", "😋"),
            createWordEntry("Plate", "盘子", "🍽️"),
            createWordEntry("Barbecue", "烧烤", "🍖"),
            createWordEntry("Cook", "烹饪", "👨‍🍳"),
            createWordEntry("Jam", "果酱", "🍓"),
            createWordEntry("Rice", "米饭", "🍚"),
            createWordEntry("Biscuit", "饼干", "🍪"),
            createWordEntry("Cooker", "炉灶", "🔥"),
            createWordEntry("Juice", "果汁", "🧃"),
            createWordEntry("Roast", "烤", "🍖"),
            createWordEntry("Boil", "煮", "🍲"),
            createWordEntry("Cream", "奶油", "🥛"),
            createWordEntry("Kitchen", "厨房", "🏠"),
            createWordEntry("Salad", "沙拉", "🥗"),
            createWordEntry("Boiled", "煮的", "🥚"),
            createWordEntry("Cup", "杯子", "☕"),
            createWordEntry("Knife", "刀", "🔪"),
            createWordEntry("Salt", "盐", "🧂"),
            createWordEntry("Bottle", "瓶子", "🍾"),
            createWordEntry("Curry", "咖喱", "🍛"),
            createWordEntry("Lemon", "柠檬", "🍋"),
            createWordEntry("Sandwich", "三明治", "🥪"),
            createWordEntry("Bowl", "碗", "🥣"),
            createWordEntry("Cut", "切", "🔪"),
            createWordEntry("Lemonade", "柠檬水", "🍋"),
            createWordEntry("Sauce", "酱", "🥫"),
            createWordEntry("Box", "盒子", "📦"),
            createWordEntry("Delicious", "美味的", "😋"),
            createWordEntry("Lunch", "午餐", "🍱"),
            createWordEntry("Sausage", "香肠", "🌭"),
            createWordEntry("Break", "休息", "☕"),
            createWordEntry("Dessert", "甜点", "🍰"),
            createWordEntry("Main course", "主菜", "🍽️"),
            createWordEntry("Slice", "片", "🍕"),
            createWordEntry("Breakfast", "早餐", "🍳"),
            createWordEntry("Dinner", "晚餐", "🍽️"),
            createWordEntry("Meal", "餐", "🍽️"),
            createWordEntry("Snack", "小吃", "🍿"),
            createWordEntry("Dish", "菜", "🍽️"),
            createWordEntry("Meat", "肉", "🥩"),
            createWordEntry("Soup", "汤", "🍲"),
            createWordEntry("Drink", "饮料", "🥤"),
            createWordEntry("Melon", "瓜", "🍈"),
            createWordEntry("Steak", "牛排", "🥩"),
            createWordEntry("Eat", "吃", "🍴"),
            createWordEntry("Mineral water", "矿泉水", "💧"),
            createWordEntry("Strawberry", "草莓", "🍓"),
            createWordEntry("Fish", "鱼", "🐟"),
            createWordEntry("Mushroom", "蘑菇", "🍄"),
            createWordEntry("Sugar", "糖", "🍬"),
            createWordEntry("Food", "食物", "🍽️"),
            createWordEntry("Omelette", "煎蛋", "🍳"),
            createWordEntry("Sweet", "甜的", "🍬"),
            createWordEntry("Fork", "叉子", "🍴"),
            createWordEntry("Oil", "油", "🛢️"),
            createWordEntry("Tea", "茶", "🍵"),
            createWordEntry("Fruit", "水果", "🍎"),
            createWordEntry("Onion", "洋葱", "🧅"),
            createWordEntry("Thirsty", "渴的", "💧"),
            createWordEntry("Fried", "炸的", "🍟"),
            createWordEntry("Orange", "橙子", "🍊"),
            createWordEntry("Toast", "吐司", "🍞"),
            createWordEntry("Garlic", "大蒜", "🧄"),
            createWordEntry("Pasta", "意大利面", "🍝"),
            createWordEntry("Tomato", "番茄", "🍅"),
            createWordEntry("Grape", "葡萄", "🍇"),
            createWordEntry("Waiter", "服务员", "👨‍🍳"),
            createWordEntry("Vegetable", "蔬菜", "🥬"),
            createWordEntry("Pear", "梨", "🍐"),
            createWordEntry("Waitress", "女服务员", "👩‍🍳"),
            createWordEntry("Chicken", "鸡肉", "🍗"),
            createWordEntry("Pepper", "胡椒", "🌶️"),
            createWordEntry("Wash up", "洗碗", "🧽"),
            createWordEntry("Chilli", "辣椒", "🌶️"),
            createWordEntry("Grilled", "烤的", "🍖"),
            createWordEntry("Picnic", "野餐", "🧺"),
            createWordEntry("Yoghurt", "酸奶", "🥛"),
            createWordEntry("Chips", "薯条", "🍟"),
            createWordEntry("Honey", "蜂蜜", "🍯"),
            createWordEntry("Piece of cake", "小菜一碟", "🍰"),
            createWordEntry("Can", "罐头", "🥫"),
            createWordEntry("Candy", "糖果", "🍬"),
            createWordEntry("Carrot", "胡萝卜", "🥕"),
            createWordEntry("Cereal", "谷物", "🥣"),
            createWordEntry("Chef", "厨师", "👨‍🍳"),
            createWordEntry("Glass", "玻璃杯", "🥛"),
            createWordEntry("Cafe", "咖啡馆", "☕"),
            createWordEntry("Cafeteria", "自助餐厅", "🍽️")
        ],

        // Sport Extended
        "Sport Extended": [
            createWordEntry("Ball", "球", "⚽"),
            createWordEntry("Riding", "骑马", "🏇"),
            createWordEntry("Badminton", "羽毛球", "🏸"),
            createWordEntry("Rugby", "橄榄球", "🏈"),
            createWordEntry("Baseball", "棒球", "⚾"),
            createWordEntry("Game", "游戏", "🎮"),
            createWordEntry("Sailing", "帆船", "⛵"),
            createWordEntry("Bat", "球拍", "🏏"),
            createWordEntry("Golf", "高尔夫", "⛳"),
            createWordEntry("Table tennis", "乒乓球", "🏓"),
            createWordEntry("Bathing suit", "泳衣", "🩱"),
            createWordEntry("Hockey", "曲棍球", "🏒"),
            createWordEntry("Skate", "滑冰", "⛸️"),
            createWordEntry("Team", "团队", "👥"),
            createWordEntry("Skateboard", "滑板", "🛹"),
            createWordEntry("Tennis player", "网球运动员", "🎾"),
            createWordEntry("Throw", "投", "🤾"),
            createWordEntry("Catch", "接", "🤾"),
            createWordEntry("Player", "运动员", "⚽"),
            createWordEntry("Snowboard", "滑雪板", "🏂"),
            createWordEntry("Climb", "攀爬", "🧗"),
            createWordEntry("Pool", "游泳池", "🏊"),
            createWordEntry("Snowboarding", "滑雪", "🏂"),
            createWordEntry("Soccer", "足球", "⚽"),
            createWordEntry("Versus", "对", "🆚"),
            createWordEntry("Competition", "比赛", "🏆"),
            createWordEntry("Prize", "奖品", "🏆"),
            createWordEntry("Volleyball", "排球", "🏐"),
            createWordEntry("Cricket", "板球", "🏏"),
            createWordEntry("Race", "比赛", "🏁"),
            createWordEntry("Surf", "冲浪", "🏄"),
            createWordEntry("Enter", "进入", "🚪"),
            createWordEntry("Surfboard", "冲浪板", "🏄"),
            createWordEntry("Win", "赢", "🏆"),
            createWordEntry("Fishing", "钓鱼", "🎣"),
            createWordEntry("Ride", "骑", "🚴"),
            createWordEntry("Surfboarding", "冲浪", "🏄"),
            createWordEntry("Windsurfing", "帆板", "🏄"),
            createWordEntry("Luck", "运气", "🍀"),
            createWordEntry("Ski", "滑雪", "⛷️"),
            createWordEntry("Skiing", "滑雪", "⛷️"),
            createWordEntry("Winner", "获胜者", "🏆")
        ]
    }
};

// Helper function to get all words as flat array (for backward compatibility)
function getAllWords() {
    const allWords = [];
    for (const semester of Object.values(WORD_BANK)) {
        for (const unit of Object.values(semester)) {
            allWords.push(...unit);
        }
    }
    return allWords;
}

// Helper function to get words by semester
function getWordsBySemester(semesterName) {
    const semester = WORD_BANK[semesterName];
    if (!semester) return [];
    const words = [];
    for (const unit of Object.values(semester)) {
        words.push(...unit);
    }
    return words;
}

// Helper function to get words by specific unit
function getWordsByUnit(semesterName, unitName) {
    const semester = WORD_BANK[semesterName];
    if (!semester) return [];
    return semester[unitName] || [];
}

// Export for use in main app
if (typeof window !== 'undefined') {
    window.WORD_BANK = WORD_BANK;
    window.getAllWords = getAllWords;
    window.getWordsBySemester = getWordsBySemester;
    window.getWordsByUnit = getWordsByUnit;
}
