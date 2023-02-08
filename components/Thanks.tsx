import ThankYou from './icons/ThankYou'

const Thanks = () => {
  return (
    <div className="mx-auto flex w-full max-w-[435px] flex-1 flex-col items-center justify-center">
      <ThankYou className="mb-8" />
      <span className="mb-5 text-4xl font-bold text-marineBlue">
        Thank you!
      </span>
      <p className="text-center text-coolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  )
}

export default Thanks
