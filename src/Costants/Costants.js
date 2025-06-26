import {
    clickSound1,
    clickSound2,
    clickSound3, clickSound4, clickSound5, clickSound6, clickSound7, clickSound8,
    whiteFacebook,
    whiteInstagram,
    whiteMail,
    whiteTiktok
} from "../utils/index.js";

export const navList = [
    {
        id: 1,
        title: "About",
        href: "#about"
    },
    {
        id: 2,
        title: "Switches",
        href: "#switches"
    },
    {
        id: 3,
        title: "Features",
        href: "#features"
}];

export const heroDescription = "Designed for ultimate customization, the MK-zero combines minimalist design, high-quality components, and a uniquely satisfying typing experience. " +
    "Choose your switches, customize every key, and make it truly yours.";

export const switchColors = [
    {
        id: 0,
        name: "Red (linear)",
        description: "Smooth and quiet with no bump, ideal for gaming and fast typing.",
        color: "#c62323",
        sound: clickSound1,
        price: 45
    },
    {
        id: 1,
        name: "Yellow (linear)",
        description: "Light, smooth, and slightly faster than red — great for competitive use.",
        color: "#e8bb14",
        sound: clickSound2,
        price: 40
    },
    {
        id: 2,
        name: "Silent Red (Linear) ",
        description: "Like red but with built-in dampening for ultra-quiet typing.",
        color: "#6e0d0d",
        sound: clickSound3,
        price: 50
    },
    {
        id: 3,
        name: "Green (Tactile)",
        description: "Gentle bump without click; perfect balance for typing and casual gaming.",
        color: "#1f5a05",
        sound: clickSound4,
        price: 40
    },
    {
        id: 4,
        name: "Clear (Tactile) ",
        description: "Heavier tactile bump: for those who prefer more pronounced feedback.",
        color: "#b4c5f8",
        sound: clickSound6,
        price: 50
    },
    {
        id: 5,
        name: "Blue (Clicky)",
        description: "Tactile bump with loud click, satisfying for some, noisy for others.",
        color: "#2d4dac",
        sound: clickSound7,
        price: 35
    },
    {
        id: 6,
        name: "Box White (Clicky) ",
        description: "Clean, crisp click with a more refined sound and shorter travel.",
        color: "#e9e9e9",
        sound: clickSound8,
        price: 45
    },

];

export const footerLinks = [
    {
        id:1,
        title: "Instagram",
        src: whiteInstagram,
        href: "https://www.instagram.com/"
    },

    {
        id:2,
        title: "Tiktok",
        src: whiteTiktok,
        href: "https://www.tiktok.com/"
    },

    {
        id:3,
        title: "Facebook",
        src: whiteFacebook,
        href: "https://www.facebook.com/"
    },

    {
        id:4,
        title: "Email",
        src: whiteMail,
        href: "https://www.gmail.com/"
    }

];

export const keyboardText = [
    {
        id: 1,
        text: "Every layer has a purpose — from top to bottom, precision is built in.",
        start: 0.05,
        midIn: 0.10,
        midOut: 0.15,
        end: 0.20,
    },
    {
        id: 2,
        text: "Beneath the surface lies the brain — programmable and precise.",
        start: 0.20,
        midIn: 0.25,
        midOut: 0.30,
        end: 0.35,
    },
    {
        id: 3,
        text: "Stabilizers. Switches. Mounting plates. Everything aligned for perfection.",
        start: 0.35,
        midIn: 0.40,
        midOut: 0.45,
        end: 0.50,
    },
    {

        id: 4,
        text: "The core structure isolates sound and reinforces every keystroke.",
        start: 0.50,
        midIn: 0.55,
        midOut: 0.60,
        end: 0.65,
    },
    {
        id: 5,
        text: "Sound dampening layers turn loud clicks into satisfying thocks.",
        start: 0.65,
        midIn: 0.70,
        midOut: 0.75,
        end: 0.80,
    },
    {
        id: 6,
        text: "This isn’t just a keyboard — it’s a finely tuned machine.",
        start: 0.80,
        midIn: 0.85,
        midOut: 0.90,
        end: 0.95,
    }
]

export const caseCtz = {
    title: "Let’s start with the case!",
    description: "The case shapes the keyboard’s look, sound, and feel—it’s the outer shell that holds everything together.",
    materials: [
        { id: 1, name: "Aluminum", color: "#b4c5f8", price: 50},
        { id: 2, name: "Plastic",  color: "#1d357c", price: 20},
        { id: 3, name: "Acrilic", color: "#030a1e", price: 35}
    ]
}

export const pcbCtz = {
    title: "Choose now your PCB!",
    description: "The PCB is the keyboard’s brain—detects key presses and adds features like hot-swap, RGB, and layout options",
    types: [
        { id: 1, name: "Hot-swap (no soldering)", color: "#bababa", price: 50},
        { id: 2, name: "Solderable",  color: "#3c3c3c", price: 20},
    ],
    connection: [
        { id: 1, name: "USB-C", color: "#bababa", price: 10},
        { id: 2, name: "Wireless (Bluetooth /2.4GHz)",  color: "#3c3c3c", price: 15},
        { id: 2, name: "Both",  color: "#3c3c3c", price: 25},
    ]
}

export const plateCtz = {
    title: "Choose now your Plate!",
    description: "The plate secures switches above the PCB and shapes the keyboard’s feel and sound based on its material.",
    materials: [
        { id: 1, name: "Aluminum", color: "#a1a3af", price: 15},
        { id: 2, name: "Brass",  color: "#d8ac16", price: 20},
        { id: 3, name: "Carbon Fiber", color: "#171515", price: 35}
    ]
}

export const keycapCtz = {
    title: "Final step! Choose your keycaps!",
    description: "Keycaps are the top parts of keys, shaping the keyboard’s look, feel, and sound.",
    materials: [
        { id: 1, name: "ABS – Smooth and lightweight; prone to shine over time", color: "#a1a3af", price: 15},
        { id: 2, name: "PBT – Textured and durable; resists wear and shine.",  color: "#d8ac16", price: 20},
        { id: 3, name: "POM – Slick, smooth feel with high durability (less common).", color: "#171515", price: 35}
    ]
}

