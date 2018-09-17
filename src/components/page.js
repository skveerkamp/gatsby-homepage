// import React from 'react'
// import PageTransition from 'gatsby-plugin-page-transitions'

// const Page = ({ children }) => (
//   <PageTransition
//     defaultStyle={{
//       transition: 'left 400ms cubic-bezier(0.47, 0, 0.75, 0.72)',
//       left: '100%',
//       position: 'absolute',
//       width: '100%',
//     }}
//     transitionStyles={{
//       entering: { left: '0%' },
//       entered: { left: '0%' },
//       exiting: { left: '-100%' },
//       exited: { left: '-100%' },
//     }}
//     transitionTime={400}
//   >
//     <div style={{
//       background: "blue",
//       width: "1170px",
//       marginLeft: "auto",
//       marginRight: "auto",
//     }}>
//     {children}
//     </div>
//   </PageTransition>
// )

// export default Page
import React from 'react'

const Page = ({ children }) => (
  <div>
    {children}
  </div>
)

export default Page
