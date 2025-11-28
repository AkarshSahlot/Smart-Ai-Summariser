import React, { useState } from 'react';

export default function TextSummarizer() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [summaryLength, setSummaryLength] = useState('medium');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  // Simple but effective extractive summarization algorithm
  const generateSummary = () => {
    if (!inputText.trim()) {
      setError('Please enter some text to summarize');
      return;
    }

    if (inputText.trim().split(/\s+/).length < 50) {
      setError('Please enter at least 50 words for meaningful summarization');
      return;
    }

    setLoading(true);
    setError('');
    setSummary('');

    // Simulate processing time for better UX
    setTimeout(() => {
      try {
        // Split into sentences
        const sentences = inputText
          .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
          .split("|")
          .map(s => s.trim())
          .filter(s => s.length > 0);

        if (sentences.length === 0) {
          setError('Could not process the text. Please try again.');
          setLoading(false);
          return;
        }

        // Calculate sentence scores based on word frequency
        const words = inputText.toLowerCase()
          .replace(/[^\w\s]/g, '')
          .split(/\s+/)
          .filter(w => w.length > 3); // Filter out short words

        // Remove common stop words
        const stopWords = new Set(['this', 'that', 'with', 'from', 'have', 'been', 'were', 'will', 'would', 'could', 'should', 'their', 'there', 'these', 'those', 'what', 'which', 'when', 'where', 'who', 'whom', 'whose', 'why', 'how']);
        
        const filteredWords = words.filter(w => !stopWords.has(w));

        // Calculate word frequency
        const wordFreq = {};
        filteredWords.forEach(word => {
          wordFreq[word] = (wordFreq[word] || 0) + 1;
        });

        // Score each sentence based on word frequency
        const sentenceScores = sentences.map((sentence, index) => {
          const sentenceWords = sentence.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .split(/\s+/)
            .filter(w => w.length > 3 && !stopWords.has(w));
          
          let score = 0;
          sentenceWords.forEach(word => {
            score += wordFreq[word] || 0;
          });

          // Bonus for first few sentences (usually contain important info)
          if (index < 3) score *= 1.5;
          
          // Bonus for sentences with numbers (often contain facts)
          if (/\d/.test(sentence)) score *= 1.2;

          return { sentence, score, index };
        });

        // Sort by score and select top sentences
        const lengthMap = {
          brief: Math.min(3, Math.ceil(sentences.length * 0.2)),
          medium: Math.min(5, Math.ceil(sentences.length * 0.3)),
          detailed: Math.min(8, Math.ceil(sentences.length * 0.4))
        };

        const numSentences = lengthMap[summaryLength];

        const topSentences = sentenceScores
          .sort((a, b) => b.score - a.score)
          .slice(0, numSentences)
          .sort((a, b) => a.index - b.index) // Maintain original order
          .map(item => item.sentence);

        const summaryText = topSentences.join(' ');
        setSummary(summaryText);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while processing. Please try again.');
        console.error(err);
        setLoading(false);
      }
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInputText('');
    setSummary('');
    setError('');
  };

  const wordCount = inputText.trim().split(/\s+/).filter(w => w).length;

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    mainCard: {
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '18px',
      color: '#666',
      marginTop: '10px'
    },
    badge: {
      display: 'inline-block',
      background: '#10b981',
      color: 'white',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
      marginTop: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '30px'
    },
    section: {
      background: '#f8f9fa',
      padding: '25px',
      borderRadius: '15px',
      border: '2px solid #e9ecef'
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    textarea: {
      width: '100%',
      minHeight: '300px',
      padding: '15px',
      fontSize: '15px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      resize: 'vertical',
      fontFamily: 'inherit',
      marginBottom: '15px',
      boxSizing: 'border-box'
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px'
    },
    lengthButton: {
      flex: 1,
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    lengthButtonActive: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    lengthButtonInactive: {
      background: '#e9ecef',
      color: '#495057'
    },
    generateButton: {
      width: '100%',
      padding: '15px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      marginBottom: '10px'
    },
    clearButton: {
      width: '100%',
      padding: '12px',
      background: 'white',
      color: '#667eea',
      border: '2px solid #667eea',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer'
    },
    outputBox: {
      minHeight: '300px',
      padding: '20px',
      background: 'white',
      borderRadius: '10px',
      border: '2px solid #e0e0e0',
      whiteSpace: 'pre-wrap',
      lineHeight: '1.6',
      fontSize: '15px',
      color: '#333'
    },
    errorBox: {
      padding: '15px',
      background: '#fee',
      border: '2px solid #fcc',
      borderRadius: '8px',
      color: '#c33',
      marginBottom: '15px'
    },
    loadingBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px'
    },
    spinner: {
      width: '50px',
      height: '50px',
      border: '5px solid #f3f3f3',
      borderTop: '5px solid #667eea',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    copyButton: {
      padding: '8px 16px',
      background: '#667eea',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      cursor: 'pointer'
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginTop: '30px'
    },
    featureCard: {
      background: '#f8f9fa',
      padding: '20px',
      borderRadius: '12px',
      textAlign: 'center',
      border: '2px solid #e9ecef'
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        button:hover {
          transform: translateY(-2px);
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
      
      <div style={styles.mainCard}>
        <div style={styles.header}>
          <div style={styles.title}>
            ✨ AI Text Summarizer
          </div>
          <p style={styles.subtitle}>
            Transform long documents into concise, meaningful summaries instantly
          </p>
          <div style={styles.badge}>
            ✓ 100% FREE - No API Required
          </div>
        </div>

        <div style={styles.grid}>
          {/* Input Section */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>
              <span>📄 Input Text</span>
              <span style={{fontSize: '14px', color: '#666'}}>{wordCount} words</span>
            </div>
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your text here... (minimum 50 words)

Try it with a news article, research abstract, or any long text!"
              style={styles.textarea}
            />

            <div>
              <label style={{display: 'block', marginBottom: '10px', fontWeight: '600', fontSize: '14px'}}>
                Summary Length
              </label>
              <div style={styles.buttonGroup}>
                {[
                  { value: 'brief', label: 'Brief' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'detailed', label: 'Detailed' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSummaryLength(option.value)}
                    style={{
                      ...styles.lengthButton,
                      ...(summaryLength === option.value ? styles.lengthButtonActive : styles.lengthButtonInactive)
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generateSummary}
              disabled={loading || !inputText.trim()}
              style={styles.generateButton}
            >
              {loading ? '⏳ Generating...' : '✨ Generate Summary'}
            </button>
            
            <button
              onClick={clearAll}
              style={styles.clearButton}
            >
              🗑️ Clear All
            </button>
          </div>

          {/* Output Section */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>
              <span>📝 Summary</span>
              {summary && (
                <button onClick={copyToClipboard} style={styles.copyButton}>
                  {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
              )}
            </div>

            {error && (
              <div style={styles.errorBox}>
                ⚠️ {error}
              </div>
            )}
            
            {loading && (
              <div style={styles.loadingBox}>
                <div style={styles.spinner}></div>
                <p style={{marginTop: '20px', color: '#666'}}>Analyzing and summarizing...</p>
              </div>
            )}
            
            {summary && !loading && (
              <div style={styles.outputBox}>
                {summary}
              </div>
            )}
            
            {!summary && !loading && !error && (
              <div style={{...styles.outputBox, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '48px', marginBottom: '10px'}}>📄</div>
                  <p>Your summary will appear here</p>
                  <p style={{fontSize: '12px', marginTop: '10px'}}>Uses smart algorithm to extract key sentences</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div style={styles.features}>
          {[
            { icon: '⚡', title: 'Instant Results', desc: 'No API calls, works offline' },
            { icon: '🎯', title: 'Smart Algorithm', desc: 'Extracts most important sentences' },
            { icon: '💰', title: '100% Free', desc: 'No costs, no limits' }
          ].map((feature, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={{fontSize: '40px', marginBottom: '10px'}}>{feature.icon}</div>
              <h3 style={{fontWeight: '600', marginBottom: '5px'}}>{feature.title}</h3>
              <p style={{fontSize: '14px', color: '#666', margin: 0}}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div style={{marginTop: '30px', padding: '20px', background: '#f0f9ff', borderRadius: '12px', border: '2px solid #bae6fd'}}>
          <h3 style={{margin: '0 0 10px 0', color: '#0369a1'}}>🤖 How It Works:</h3>
          <ul style={{margin: 0, paddingLeft: '20px', color: '#0c4a6e'}}>
            <li>Analyzes word frequency and importance</li>
            <li>Scores each sentence based on key words</li>
            <li>Selects top sentences while maintaining order</li>
            <li>Runs completely in your browser - no data sent anywhere!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}