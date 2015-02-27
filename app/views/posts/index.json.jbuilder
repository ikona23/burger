json.array!(@posts) do |post|
  json.extract! post, :id, :meno, :email, :telefon, :vyber_id
  json.url post_url(post, format: :json)
end
