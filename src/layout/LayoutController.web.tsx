import React from "react"
// Customizable Area Start

/*istanbul ignore next */
 export default class LayoutController extends React.Component<any,any> {
  // Customizable Area Start
  apiGetUserData:string ="";
  apiGetRecentSearches: string = "";
  apiGetSearchResults: string = "";
  apiDeleteRecentSearch: string = "";
  // Customizable Area End
     constructor(props: any) {
     super(props);

    this.state = {
      loading: false,
      fullName:"",
      email:"",
      city:"",
      state:"",
      userPronoun:"",
      profileImageSrc:"",
      followerCount:0,
      postCount:0,
      loggedInUserData:null,
      selectedTabId:Number(localStorage.getItem("SelectedScreenId")),
      isSearchModel: false,
      isRecentSearchShow: true,
      searchInput: "",
      recentSearchesList: [],
      searchResults: [],
      isLoading: false,
      showAllEnabled: false,
      searchModelRef: React.createRef<HTMLDivElement>(),
      searchInputRef: React.createRef<HTMLInputElement>()
    };
  // Customizable Area End
  }
  // Customizable Area Start
  handleConditionalRender = () => {
    return false
  }

  handleConditionaRenderForInitialScreens = () => {
    return false
  }

  handleConditionalRenderForUserProfile = () => {
    return false
  }

  handleSelectNavbarItem = (e:any , value:any) => {
    this.setState({ selectedTabId : value})
    localStorage.setItem("SelectedScreenId" , value)
  }

  handleOnClickMenuNavbarItem = (screenName : any) => {
    // if(screenName) {
    //   this.props.navigation.navigate(screenName)
    // }
  }

  handleSetSelectedNavbarItemFromHistory = () => {
    //need to set from local storage//
    this.setState({ selectedTabId : Number(localStorage.getItem("SelectedScreenId")) })
  }


  // Customizable Area End

  async componentDidMount() {
    // Customizable Area Start
   
    this.handleSetSelectedNavbarItemFromHistory()
    // await this.handleGetUserData();
    document.body.addEventListener("click", this.handleOutsideClick);
    // Customizable Area End

  }

 // Customizable Area Start

 async componentWillUnmount() {
  
  document.body.removeEventListener("click", this.handleOutsideClick);
}
  handleSetUserDetails = async(responseJson : any) => {
    const userPostCount = localStorage.getItem("LoggedInUserPostCount")
    if(!responseJson?.errors){
      if(responseJson?.data){ 
        this.setState({loggedInUserData: { ...responseJson.data} , email : responseJson.data?.attributes?.email , fullName : responseJson.data?.attributes?.full_name , city : responseJson.data?.attributes?.city , state : responseJson.data?.attributes?.state , userPronoun : responseJson.data?.attributes?.pronouns , followerCount : responseJson.data?.attributes?.follower_count , postCount : responseJson.data?.attributes?.posts?.data?.length || userPostCount})
        if(responseJson?.data?.attributes?.profile_picture){
        //   const profileSrc = `${configJSON.baseURL}${responseJson.data.attributes.profile_picture}`
          this.setState({ profileImageSrc : "" })
        }
      }
    }else{
    //   for(let key in responseJson.errors[0])
    //   {
    //           this.props.navigation.navigate("LogIn")
    //   }
    }
  }

  handleSearchInputChange = async (e: any) => {
    this.setState({
      searchInput: e.target.value
    }, async () => {
    //   if(this.state.searchInput.trim().length > 0){
    //     await this.fetchSearchResults();
    //   } else {
    //     await this.fetchRecentSearches();
    //   }
    })
  }

  startLoading = () => {
    this.setState({
      isLoading: true
    })
  }
  
  toggleShowAll = () => {
    this.setState({
      showAllEnabled: true
    })
  }
//   showSearchModel = () => {
//     if(!this.state.isSearchModel){
//       this.fetchRecentSearches();
//     }
//     this.setState({
//       isSearchModel: true
//     });
//   }

  handleOutsideClick = (event: MouseEvent) => {

    // if (
    //   event.target instanceof Node &&
    //   this.state.searchInputRef.current &&
    // this.state.searchModelRef.current &&
    // !this.state.searchInputRef.current.contains(event.target) &&
    // !this.state.searchModelRef.current.contains(event.target)
    // ) {
    //   this.setState({
    //     isSearchModel: false,
    //     searchResults: [],
    //     searchInput: "",
    //     showAllEnabled: false
    //   });
    // }
  };

  renderShowAll = () => {
    return  <div onClick={this.toggleShowAll} className="showall">
    Show all
    </div>;
  }

 // Customizable Area End
}