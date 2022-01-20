class Api::BraintreeController < ApplicationController
  def token
    render json: ENV['BRAINTREE_DROPIN_TOKEN']
  end

  def payment
    # send payment to braintree
    result = Braintree::Transaction.sale(
      amount: params[:amount],
      payment_method_nonce: params[:nonce],
      options: {
        # charge card right away
        submit_for_settlement: true
      }
    )

    if result.success?
      render json: result.transaction.id
    elsif result.transaction
      text = result.transaction.processor_response_text
      code = result.transaction.processor_response_code
      render json: { errors: {text:text, code:code}}, status: 422
    else
      render json: {errors: result.errors}  
    end  
  end
end
