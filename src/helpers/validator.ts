import withJoi from "next-joi";

export default withJoi({
  onValidationError: (_, res, error) => {
    console.log(error);
    const message: string = error.details[0].message.replace(/['"]/g, "");
    res.status(400).json({ message });
  },
});
