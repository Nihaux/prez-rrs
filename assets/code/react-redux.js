const MyButton = (props) => (
  <button onclick={props.onClick}>
    {props.theButtonValue}
  </button>
);

const mapStateToProps = (state) => ({
  theButtonValue: state.uxValue.button.message,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: dispatch(() => addCategoryFilter({ id: 1 })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyButton);