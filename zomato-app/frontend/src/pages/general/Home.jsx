import React from 'react'


const videos = [
  {
    id: 1,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Delicious biryani with layered spices and tender meat. Limited time offer!',
    storeUrl: 'https://example.com/store/1'
  },
  {
    id: 2,
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    description: 'Fresh salads and healthy bowls prepared daily. Try today!',
    storeUrl: 'https://example.com/store/2'
  },
  // add more video objects or load them from your API
]

const containerStyle = {
  height: '100vh',
  overflowY: 'scroll',
  scrollSnapType: 'y mandatory',
  WebkitOverflowScrolling: 'touch'
}

const itemStyle = {
  position: 'relative',
  height: '100vh',
  width: '100%',
  scrollSnapAlign: 'start',
  background: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const videoStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover'
}

const overlayStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '6vh', // leave some bottom spacing so button is visible above bottom edge
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 16px',
  pointerEvents: 'none' // allow clicks only on the button (button overrides)
}

const descStyle = {
  pointerEvents: 'auto',
  color: 'white',
  textAlign: 'center',
  marginBottom: '8px',
  fontSize: '16px',
  lineHeight: '1.2',
  maxWidth: '90%',
  // two-line truncation
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden'
}

const buttonStyle = {
  pointerEvents: 'auto',
  background: '#ff6b6b',
  color: 'white',
  border: 'none',
  padding: '10px 18px',
  borderRadius: '6px',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
}

const VideoCard = ({ video }) => {
  const openStore = (e) => {
    e.stopPropagation()
    window.open(video.storeUrl, '_blank', 'noopener')
  }

  return (
    <div style={itemStyle}>
      <video
        src={video.src}
        style={videoStyle}
        playsInline
        autoPlay
        muted
        loop
      />
      <div style={overlayStyle}>
        <div style={descStyle}>{video.description}</div>
        <button style={buttonStyle} onClick={openStore}>Visit Store</button>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div style={containerStyle}>
      {videos.map(v => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  )
}

export default Home
