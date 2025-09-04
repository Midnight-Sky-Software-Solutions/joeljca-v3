export default function MailingListSignup() {
  return (
    <div id="mc_embed_shell" className="text-lg">

      <div id="mc_embed_signup">
        <form action="https://joelj.us17.list-manage.com/subscribe/post?u=c46f03c7a836863925e73b063&amp;id=3c5087667e&amp;f_id=00ea4ae0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group py-2"><label htmlFor="mce-EMAIL">Email Address:</label><input type="email" name="EMAIL" className="text-black required email bg-white rounded-md ml-4 px-2" id="mce-EMAIL" required /></div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
              <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
            </div>
            <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
              <input type="text" name="b_c46f03c7a836863925e73b063_3c5087667e" tabIndex={-1} />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="bg-blue-500 text-white text-md px-2 py-1 rounded-lg" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}