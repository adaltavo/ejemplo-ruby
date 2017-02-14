class UserController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index

  end
  def new
    @user=User.new
  end
  def create
    @user=User.new(name:params[:name],#create
                    password:params[:password],
                    correo:params[:correo],
                    rfc:params[:rfc]);
    if @user.save
      render json: @product
    else
      render json: {error:'error'}
    end
  end
  def update
  end
  def delete
  end
  def insertar

  end
end
