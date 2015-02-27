require 'test_helper'

class TypsControllerTest < ActionController::TestCase
  setup do
    @typ = typs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:typs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create typ" do
    assert_difference('Typ.count') do
      post :create, typ: { par: @typ.par }
    end

    assert_redirected_to typ_path(assigns(:typ))
  end

  test "should show typ" do
    get :show, id: @typ
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @typ
    assert_response :success
  end

  test "should update typ" do
    patch :update, id: @typ, typ: { par: @typ.par }
    assert_redirected_to typ_path(assigns(:typ))
  end

  test "should destroy typ" do
    assert_difference('Typ.count', -1) do
      delete :destroy, id: @typ
    end

    assert_redirected_to typs_path
  end
end
