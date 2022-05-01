import React from 'react'
import FaqHook from '../componentes/FaqComponent/Faq.jsx'

const Faq = () => {
  return (
    <div>

      <FaqHook
        pregunta="How To Play?"
        descripcion="Deposit BNB and Pet the Money Toad to start mining. Mine MTOAD and earn BNB. Repeat."
      />

      <FaqHook
        pregunta="Why can't I connect my wallet?"
        descripcion="Metamask is recommended when using the site. You must use Metamask mobile or another supported wallet to access the site on mobile.
        If you are stuck on the Switch to BSC button  try disabling other crypto wallet extensions They can interfere with the connection to the site."
      />
      <FaqHook
        pregunta="What will my daily percentage be?"
        descripcion="Daily percentage is up to 8%. This depends on claiming, time of day you compound or deposit, TVL fluctuation.
      The average daily return is 5-6% if you compound six days, followed by claiming once weekly."
      />
      <FaqHook
        pregunta="Why are my rewards not growing?"
        descripcion="Claiming MToad effect rewards, you claim to much your daily percentage drops.
      If you only started with a small deposit it will take time to display on the dapp. Green Eggs only go up to 3 decimal places.
      TVL daily increase can cause lower daily percentage."
      />

      <FaqHook
        pregunta="Can I get my initial back?"
        descripcion="Money Toad is a locked rewards pool, so no.
      You get your initial back over time through the my rewards section of the dapp."
      />

      <FaqHook
        pregunta="Is this sustainable?"
        descripcion="Yes, as long as there is TVL in the contract then there will always be rewards.
        The people that claim too much get punished and get lower and lower rewards. It will last a long time the higher the TVL is."
      />

      <FaqHook
        pregunta="What is the best strategy?"
        descripcion="We recommend the tried and tested method.
        Compound 6 days and claim 1 day a week. It will compound your investment and receive your initial back in 6-8 weeks."
      />

      <FaqHook
        pregunta="What prevents the devs from rugging?"
        descripcion="The contract is immutable. Therefore cannot be changed or altered in any way shape or form.
        The contract has been verified and can be viewed at ( BSC Scan (Link))"
      />

      <FaqHook
        pregunta="Can contract functions be added?"
        descripcion="No, the contract is immutable and cannot be changed.
        No wallets can be blacklisted, no forcing people to compound days and claim 1 day a week. Nothing can be changed."
      />

      <FaqHook
        pregunta="What is the minimum deposit?"
        descripcion="The minimum new deposit into the miner 0.01 BNB."
      />

      <FaqHook
        pregunta=" *Disclaimer"
        descripcion="Crypto/Defi is illegal in certain countries please consider this when investing. Do not invest more than you can afford to lose."
      />

    </div>
  )
}

export default Faq