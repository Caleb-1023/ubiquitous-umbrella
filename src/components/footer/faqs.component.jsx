/* eslint-disable react/no-unescaped-entities */

const Faqs = () => {
  return (
    <div className="w-screen min-h-screen">
        <div className="max-w-5xl m-auto px-20">
            <h1 className="text-3xl heading-text">Frequently Asked Questions</h1>
            <h3 className="mt-3 font-bold text-lg">What is TreasureX?</h3>
            <p>A free online marketplace built by Berkeley students for Berkeley students. We named it the "Treasure Exchange" because one man's trash is another man's treasure.</p>
            
            <h3 className="mt-3 font-bold text-lg">How is it different from Craigslist, Facebook Marketplace, Facebook Groups, etc.?</h3>
            <p>From interviewing our fellow Berkeley students, we found that no one is happy with the current platforms. Common issues range across lack of safety, moderation, and searchability. There's really no reason universities should be resorting to Facebook Groups as their marketplace!</p>
            
            <h3 className="mt-3 font-bold text-lg">What can I sell?</h3>
            <p>Anything that's legal!</p>
            
            <h3 className="mt-3 font-bold text-lg">How can I contact you?</h3>
            <p>You can leave us feedback <a href="https://forms.gle/TNoUXao8osfv1wBQ8">here</a> or email us at <a href="mailto:thetreasurex@gmail.com">thetreasurex@gmail.com</a>.</p>
            
            <h3 className="mt-3 font-bold text-lg">How do I pay for items?</h3>
            <p>The TreasureX website does not handle payments—you'll have to message the seller through the website to coordinate payment.</p>
            
            <h3 className="mt-3 font-bold text-lg">What are the fees for using the website?</h3>
            <p>There are none! We built this as a passion project for you and ourselves.</p>
            
            <h3>What other features are you planning to add?</h3>
            <p>You tell us! We have a roadmap of features that we're working on in our free time but we'd love to hear from you. Just click the "Feedback" button at any time.</p>
         </div>
    </div>
  )
}

export default Faqs