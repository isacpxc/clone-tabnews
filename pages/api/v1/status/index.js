function status(request, response) {
  response.status(200).json({ response: "tudo ok" });
}

export default status;
