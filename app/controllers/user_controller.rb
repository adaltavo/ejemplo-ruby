class UserController < ApplicationController
  def index

  end
  def new
    @user=User.new
  end
  def create
    @user=User.create(name:params[:user][:name],
                    password:params[:user][:password],
                    correo:params[:user][:correo],
                    rfc:params[:user][:rfc]);

  end
  def update
  end
  def delete
  end
  def insertar

  end
end
