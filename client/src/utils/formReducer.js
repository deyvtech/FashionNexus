export const reducer = (state, action) => {
	switch (action.type) {
		case "USER_FORM":
			return {...state, }
		case "LOADING":
			return { ...state, isLoading: !state.isLoading };
		case "PASSWORD":
			return { ...state, showPassword: !state.showPassword };
		case "CONFIRM_PASSWORD":
			return { ...state, showConfirmPassword: !state.showConfirmPassword };
		case "AGREE_TERMS":
			return {...state, isAgreeTheTerms: !state.isAgreeTheTerms}
		default:
			return state;
	}
};