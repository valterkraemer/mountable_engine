require 'test_helper'

module MountableEngine
  class RootControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    test "should get index" do
      get root_index_url
      assert_response :success
    end

  end
end
