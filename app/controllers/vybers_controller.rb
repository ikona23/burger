class VybersController < ApplicationController
  def index
    @vyber = Vyber.all
  end

def create
  @vyber = Vyber.create(vyber_params)

  respond_to do |format|
    if @vyber.save
      format.html { redirect_to @vyber, notice: 'Popup was successfully created.' }
      format.json { render action: 'show', status: :created, location: @vyber }
    else
      format.html { render action: 'new' }
      format.json { render json: @vyber.errors, status: :unprocessable_entity }
    end
  end
end

# PATCH/PUT /popups/1
# PATCH/PUT /popups/1.json
def update
  respond_to do |format|
    if @vyber.update(popup_params)
      format.html { redirect_to @post, notice: 'Vaša požiadavka bola úspešne opravená' }
      format.json { head :no_content }
    else
      format.html { render action: 'edit' }
      format.json { render json: @vyber.errors, status: :unprocessable_entity }
    end
  end
end

# DELETE /popups/1
# DELETE /popups/1.json
def destroy
  @vyber.destroy
  respond_to do |format|
    format.html { redirect_to popups_url }
    format.json { head :no_content }
  end
end

private
# Use callbacks to share common setup or constraints between actions.
def set_popup
  @vyber = Vyber.find(params[:id])
end

# Never trust parameters from the scary internet, only allow the white list through.
def popup_params
  params.require(:post).permit(:meno, :email, :telefon, :vyber_id )
end
  end

