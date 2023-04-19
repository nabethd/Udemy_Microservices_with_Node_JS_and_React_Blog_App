const Views = (self) => ({
  hasComment() {
    return self.comments.length > 0;
  },
});

export default Views;
