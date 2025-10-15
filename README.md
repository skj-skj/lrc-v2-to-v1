# 🎵 LRC v2 to v1 Converter

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://skj-skj.github.io/lrc-v2-to-v1/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with Claude](https://img.shields.io/badge/AI-Claude%20Sonnet%204.5-blueviolet)](https://claude.ai)

A free, open-source web tool to convert LRC v2 (Enhanced LRC with word-level timestamps) to LRC v1 (Standard LRC with line-level timestamps). Perfect for music lovers, karaoke enthusiasts, and lyrics editors who need compatibility with older media players.

## ✨ Features

- 🚀 **Instant Conversion** - Convert lyrics in real-time with a single click
- 🎯 **Clean Output** - Removes word-level timestamps and version prefixes automatically
- 📋 **Easy Copy** - One-click copy to clipboard functionality
- 🔄 **Quick Reset** - Clear all fields and start fresh instantly
- 💻 **100% Client-Side** - No server required, works completely offline
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 🔒 **Privacy-Friendly** - Your lyrics never leave your browser

## 🚀 Live Demo

Try it now: [https://skj-skj.github.io/lrc-v2-to-v1/](https://skj-skj.github.io/lrc-v2-to-v1/)

## 📖 What is LRC?

**LRC** (Lyric File Format) is a text format used to synchronize lyrics with audio files.

- **LRC v1**: Standard format with line-level timestamps
  ```
  [00:12.00] Hello world
  [00:15.00] Example lyrics
  ```

- **LRC v2**: Enhanced format with word-level timestamps
  ```
  [00:12.00] <00:12.30> Hello <00:12.60> world
  [00:15.00] <00:15.50> Example <00:16.00> lyrics
  ```

## 🎯 Use Cases

- Convert enhanced LRC files for compatibility with older media players
- Clean up lyrics files for music streaming services
- Prepare lyrics for karaoke applications
- Simplify LRC files for basic synchronization needs
- Remove unnecessary word-level timing data

## 💡 How to Use

1. **Paste** your LRC v2 content into the input textarea
2. **Click** the "Convert" button
3. **Copy** the converted LRC v1 output
4. **Reset** to convert more files

### Example Input (LRC v2):
```
[00:22.729]v1:<00:22.729>Tere <00:23.277>bin <00:24.138><00:24.396>saanu <00:24.981>soneya <00:27.242>
[00:27.350]v1:<00:27.350>Koi <00:27.763>hor <00:28.841><00:29.082>naiyo <00:29.547>labna <00:30.468>
```

### Example Output (LRC v1):
```
[00:22.729] Tere bin saanu soneya
[00:27.350] Koi hor naiyo labna
```

## 🛠️ Installation & Setup

### Option 1: Use Online (Recommended)
Simply visit the [live demo](https://skj-skj.github.io/lrc-v2-to-v1/) - no installation needed!

### Option 2: Run Locally
```bash
# Clone the repository
git clone https://github.com/skj-skj/lrc-v2-to-v1.git

# Navigate to the directory
cd lrc-v2-to-v1

# Open index.html in your browser
# No build process or dependencies required!
```

### Option 3: Deploy to GitHub Pages
1. Fork this repository
2. Go to Settings → Pages
3. Select "main" branch as source
4. Your converter will be live at `https://<your-username>.github.io/lrc-v2-to-v1/`

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **No Backend Required** - 100% client-side processing
- **Fast & Lightweight** - Minimal file size, instant loading
- **Cross-Browser Compatible** - Works on all modern browsers

## 📂 Project Structure

```
lrc-v2-to-v1/
│
├── index.html          # Main application file (all-in-one)
├── README.md           # Documentation
└── LICENSE             # MIT License
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions:
- Add batch file conversion
- Support for drag-and-drop file upload
- Export directly to .lrc file
- Dark mode toggle
- Additional LRC format variations
- Internationalization (i18n)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Created with the assistance of **Claude Sonnet 4.5** by Anthropic
- Inspired by the need for better LRC format compatibility
- Thanks to the open-source community for LRC format documentation

## 🔍 Keywords

LRC converter, LRC v2 to v1, lyrics converter, karaoke converter, enhanced LRC, synchronized lyrics, lyric file converter, word-level timestamps, line-level timestamps, music lyrics tool, free LRC converter, online lyrics converter

## 📧 Support

If you encounter any issues or have suggestions:
- Open an [Issue](https://github.com/skj-skj/lrc-v2-to-v1/issues)
- Star ⭐ this repository if you find it useful!

---

**Made with ❤️ and AI assistance from Claude Sonnet 4.5**

[⬆ Back to Top](#-lrc-v2-to-v1-converter)
