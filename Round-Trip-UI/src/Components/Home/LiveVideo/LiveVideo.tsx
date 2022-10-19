import React from 'react'

const LiveVideo = () => {
  return (
   /* ====================
        Video part 
        ====================== */
        <section className="container-fluid p-0 mt-5 pt-5">
            <div className="video">
                <iframe width="100%" height="600px" src="https://www.youtube.com/embed/f7hbWvHKns0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </section>
  )
}

export default LiveVideo