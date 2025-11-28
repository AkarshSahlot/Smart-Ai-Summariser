# ✨ AI Text Summarizer

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://smart-ai-summariser-5paws8lc4-akarsh-sahlots-projects.vercel.app)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Build-orange)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Free](https://img.shields.io/badge/Cost-100%25%20Free-success)](https://smart-ai-summariser-5paws8lc4-akarsh-sahlots-projects.vercel.app)

A smart, privacy-focused AI text summarizer that transforms lengthy documents into concise, meaningful summaries instantly. **No API keys required - works completely offline!**

## 🚀 Live Demo

**Visit the live application:**  
👉 **https://smart-ai-summariser.vercel.app**

## ✨ Key Features

- 🆓 **100% Free** - No subscription, no API costs, unlimited usage
- 🔒 **Privacy First** - All processing happens locally in your browser
- 🎯 **Smart Algorithm** - Advanced extractive summarization using word frequency analysis
- 📊 **Multiple Lengths** - Brief (2-3 sentences), Medium (4-6), Detailed (8-10)
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Instant Results** - No waiting for API calls or server processing
- 📋 **One-Click Copy** - Easy copy to clipboard functionality
- 🎨 **Beautiful UI** - Modern gradient design with intuitive interface

## 🎯 What It Summarizes

- 📄 **Research Papers** & Academic Articles
- 📰 **News Stories** & Blog Posts
- 📊 **Reports** & Documentation
- 📧 **Long Emails** & Messages
- 📚 **Academic Content** & Essays
- 🔬 **Technical Documentation**

## 🛠️ How It Works

### Algorithm Process:
1. **Text Processing** - Splits input into sentences and cleans text
2. **Word Analysis** - Calculates frequency of important words (excluding common stop words)
3. **Sentence Scoring** - Scores each sentence based on key word presence and position
4. **Smart Selection** - Picks top sentences while maintaining original order for coherence
5. **Length Optimization** - Adjusts output based on selected summary length

### Technical Highlights:
- Removes common stop words (the, is, and, etc.)
- Gives bonus points to sentences with numbers and facts
- Prioritizes introductory sentences
- Maintains contextual flow and readability

## 🚀 Quick Usage

1. **Visit** [the live demo](https://smart-ai-summariser-5paws8lc4-akarsh-sahlots-projects.vercel.app)
2. **Paste** your long text (minimum 50 words)
3. **Choose** your preferred summary length
4. **Click** "Generate Summary"
5. **Copy** your concise summary with one click!

## 🖥️ Local Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/ai-text-summarizer.git
cd ai-text-summarizer

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure
```
ai-text-summarizer/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🌐 Deployment

This project is deployed on **Vercel** for optimal performance:

### Deploy Your Own Version:
1. Fork this repository
2. Connect your GitHub to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Alternative Deployment Options:
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use `npm run deploy`
- **Render**: Connect your repository for auto-deployment

## 🔧 Customization

### Modify Summary Parameters:
Edit the `lengthMap` in the code:
```javascript
const lengthMap = {
  brief: Math.min(3, Math.ceil(sentences.length * 0.2)),
  medium: Math.min(5, Math.ceil(sentences.length * 0.3)),
  detailed: Math.min(8, Math.ceil(sentences.length * 0.4))
};
```

### Add Custom Stop Words:
```javascript
const stopWords = new Set(['this', 'that', 'with', 'your', 'custom', 'words']);
```

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Scripts:
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🐛 Troubleshooting

### Common Issues:

**"Please enter at least 50 words"**
- Ensure your text contains sufficient content
- Check for proper word separation and formatting

**Summary Quality Concerns**
- Try different length settings for optimal results
- Ensure input text is well-structured and coherent
- For technical content, use the "Detailed" option

**Performance Issues**
- The app runs entirely in your browser - no server delays
- Works offline once loaded
- Compatible with all modern browsers

## 📊 Performance

- ⚡ **Lightning Fast**: No API calls = instant results
- 📱 **Mobile Optimized**: Responsive design for all devices
- 🔒 **Zero Data Transfer**: Your data never leaves your device
- 💾 **Low Memory**: Efficient algorithm with minimal resource usage

## 🆚 Why Choose This Summarizer?

| Feature | Our Tool | Other Tools |
|---------|----------|-------------|
| **Cost** | 🆓 100% Free | 💰 Often paid |
| **Privacy** | 🔒 Local processing | 📡 Sends data to servers |
| **Speed** | ⚡ Instant | 🐌 API delays |
| **Limits** | ∞ Unlimited | 📊 Usage caps |
| **Offline** | ✅ Works offline | ❌ Requires internet |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Akash Sahlot** - [Live Demo]https://smart-ai-summariser.vercel.app

## 🙏 Acknowledgments

- Built with **React** and **Vite**
- Deployed on **Vercel** for optimal performance
- Uses pure JavaScript for text processing
- Inspired by modern AI summarization research

---

## 📞 Support & Feedback

Love this tool? Found a bug? Want to suggest a feature?

**Visit the live app and start summarizing!**  
🔗 **[https://smart-ai-summariser.vercel.app]**

---

<div align="center">

### **Transform your reading experience today!** 📚✨

*Stop drowning in information - start understanding with smart summaries!*

[![Live Demo](https://img.shields.io/badge/🚀_Try_It_Now-Live_Demo-purple?style=for-the-badge&logo=vercel)](https://smart-ai-summariser.vercel.app)

</div>
