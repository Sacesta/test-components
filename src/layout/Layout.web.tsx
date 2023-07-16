// Customizable Area Start
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
  Grid,
  Card,
  CardMedia,
  Avatar,
  CardContent,
  Tabs,
  Tab,
  ListItem,
  InputAdornment,
} from "@material-ui/core";
import {
  createStyles,
  withStyles,
  Theme,
  styled,
} from "@material-ui/core/styles";
// import SearchIcon from "./SVGIcons/SearchIcon.web";
// import LayoutController, { Props, configJSON } from "./LayoutController.web";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import AssessmentTestIcon from "./SVGIcons/AssessmentTestIcon.web";
// import HomeIcon from "./SVGIcons/HomeIcon.web";
// import AchievementIcon from "./SVGIcons/AchievementIcon.web";
// import CommunitiesIcon from "./SVGIcons/CommunitiesIcon.web";
// import NotificationsIcon from "./SVGIcons/NotificationsIcon.web";
// import CalendarIcon from "./SVGIcons/CalendarIcon.web";
// import ChatIcon from "./SVGIcons/ChatIcon.web";
// import { eagel, HeaderFVLogo, User } from "../../blocks/landingpage/src/assets"
import "./Layout.css";
import LayoutController from "./LayoutController.web";
import HomeIcon from "../assets/HomeIcon.web";
import ContectCard from "../Cards/Contect";
// import FilterSearchIcon from "./SVGIcons/FilterSearchIcon.web";
// import CalenderEvents from "../../blocks/catalogue/src/CalenderEvents.web";
// import CompanyIcon from "./SVGIcons/CompanyIcon.web";
// import CloseIconSearch from "./SVGIcons/CloseIconSearch.web";
// Customizable Area End

// Customizable Area Start
const navbarMenuList = [
  {
    id: 1,
    icon: (
      <HomeIcon
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
    ),
    label: "Home",
    screen: "LandingScreen",
  },
  {
    id: 2,
    icon: (
      <HomeIcon
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
    ),
    label: "Chat",
    screen: "",
  },
  {
    id: 3,
    icon: (
      <HomeIcon
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
    ),
    label: "Calendar",
    screen: "CalenderEvents",
  },
  {
    id: 4,
    icon: (
      <HomeIcon
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
    ),
    label: "Notifications",
    screen: "",
  },
  {
    id: 5,
    icon: (
      <HomeIcon
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
    ),
    label: "Communities",
    screen: "",
  },
  {
    id: 6,
    icon: (
      <HomeIcon
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
    ),
    label: "Assessment Test",
    screen: "",
  },
  {
    id: 7,
    icon: (
      <HomeIcon
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
    ),
    label: "Achievements",
    screen: "Achievements",
  },
];

const styles = (theme: Theme) =>
  createStyles({
    nabvar: {
      background: "#01548a",
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "5px",
    },
    inputInput: {
      width: "350px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      [theme.breakpoints.down("xs")]: {
        width: "100px",
      },
    },
    userCard: {
      textAlign: "center",
      boxShadow: "none",
      border: "1px solid #808080",
      width: "87%",
      borderRadius: "12px",
      [theme.breakpoints.down("md")]: {
        margin: "0 auto",
      },
    },
    userCommunity: {
      background: "transparent",
      boxShadow: "none",
      border: "1px solid #808080",
      width: "87%",
      borderRadius: "12px",
      [theme.breakpoints.down("md")]: {
        margin: "0 auto",
      },
    },
    media: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    mediaPost: {
      maxWidth: "100%",
      height: "300px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    line: {
      fontSize: "40px",
      color: "lightgrey",
    },
    create: {
      border: "none",
      "& fieldset": { border: "none" },
      borderRadius: "10px",
      background: "#F4F4F4",
      height: "30px",
      padding: "10px",
      width: "100%",
    },
    Icons: {
      display: "flex",
      justifyContent: "space-around",
    },
    iconBtn: {
      "&:hover": {
        borderRadius: "0px",
      },
    },
    messComment: {
      outline: "0px solid",
      border: "none",
      padding: "5px",
      width: "97%",
    },
    headerLogoSpan: {
      backgroundColor: "#fff",
      padding: "4px",
    },
    headerLogo: {
      width: "150px",
      objectFit: "contain",
      [theme.breakpoints.up("sm")]: {
        width: "100px",
      },
    },
    upcomingCommunityTypo: {
      marginLeft: "5%",
    },
    avatar: {
      width: "150px",
      height: "150px",
      objectFit: "contain",
    },
    avatarImg: {
      width: "inherit",
      height: "inherit",
    },
    headerProfilePicImg: {
      width: "inherit",
      height: "inherit",
      objectFit: "contain",
    },
    headerProfilePicImgDiv: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    },
    profileAvatar: {
      width: "50px",
      height: "50px",
      objectFit: "contain",
    },
    mainBodyContainer: {
      marginTop: "20px",
      padding: "20px 0px",
    },
    activeBorderBottom: {
      backgroundColor: "#005487",
      width: "120px",
    },
    listItem: {
      padding: "0px",
      display: "flex",
      flexDirection: "column",
    },
    listItemIcon: {
      minWidth: "0px",
    },
    listItemText: {
      color: "#005487",
      textTransform: "capitalize",
      fontSize: "16px",
    },
    cardContect: {
      marginTop: "22px",
    },
    cardtext: {
      marginTop: "4px",
    },
    mt32: {
      [theme.breakpoints.down("md")]: {
        marginTop: "32px",
      },
    },
    LayoutContainerSpace: {
      padding: "0",
      [theme.breakpoints.up("md")]: {
        padding: "0 80px",
      },
    },
  });

const MenuList = styled(Box)({
  display: "flex",
  gap: "20px",
  marign: "auto",
  justifyContent: "center",
});
// Customizable Area End

class Layout extends LayoutController {
  // Customizable Area Start
  constructor(props: any) {
    super(props);
  }
  // Customizable Area End

  render() {
    // Customizable Area Start
    const getUserPostCount = () => {
      return localStorage.getItem("LoggedInUserPostCount");
    };
    //@ts-ignore
    const { classes, children } = this.props;
    return (
      <Box height={"100%"} className="Layout">
        <Box
          style={{
            display: this.handleConditionaRenderForInitialScreens()
              ? "none"
              : "flex",
          }}
        >
          <AppBar position="fixed" className={classes.nabvar}>
            <Toolbar
              style={{
                display: "Flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography className={classes.headerLogoSpan} component={"span"}>
                <img
                  className={classes.headerLogo}
                  src={
                    "https://facesvoicesmin0623-244474-react.b244474.de…c/media/Faces_and_Voices_Header_logo.af5bf701.png"
                  }
                  alt="Logo"
                />
              </Typography>
              <div className="search-section">
                <div className={classes.search}>
                  <TextField
                    // ref={this.state.searchInputRef}
                    // onClick={this.showSearchModel}
                    data-test-id="txtInput"
                    // value={this.state.searchInput}
                    onChange={this.handleSearchInputChange}
                    placeholder="Search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          className={classes.inputAdornment}
                          position="start"
                        >
                          {/* <SearchIcon  width="24" height="24" viewBox="0 0 24 24" stroke="#808080" strokeWidth="1.5" fill="none" /> */}
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          className={classes.inputAdornment}
                          position="start"
                        >
                          {/* <FilterSearchIcon  width="24" height="24" viewBox="0 0 24 24" stroke="#808080" strokeWidth="1.5" fill="none" /> */}
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                    inputProps={{
                      "aria-label": "search",
                      className: `${classes.inputInput}`,
                    }}
                  />
                </div>
                {this.state.isSearchModel && (
                  <div ref={this.state.searchModelRef} className="view_shape">
                    {this.state.isRecentSearchShow ? (
                      <React.Fragment>
                        <div className="search-heading">
                          <span className="textlabel_Recent">Recent</span>
                        </div>
                        {!this.state.isLoading &&
                        this.state.recentSearchesList.length > 0 ? (
                          this.state.recentSearchesList
                            .filter(
                              (search: any, index: number) =>
                                this.state.showAllEnabled ||
                                (!this.state.showAllEnabled && index < 3)
                            )
                            .map((recentSearch: any) => (
                              <React.Fragment>
                                <div className="search_results">
                                  <div>
                                    {recentSearch?.attributes
                                      ?.recent_searchable_type === "Account" ? (
                                      <img
                                        src={`${
                                          recentSearch?.attributes
                                            ?.profile_picture
                                            ? recentSearch.attributes
                                                .profile_picture
                                            : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        }`}
                                        alt=""
                                        className="searchImage"
                                      />
                                    ) : (
                                      <div className="searchSvg">
                                        <HomeIcon />
                                      </div>
                                    )}

                                    <div className="searchName">
                                      {recentSearch.attributes?.title}
                                    </div>
                                  </div>
                                  <span className="textlabel_Recent">
                                    <HomeIcon
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      stroke={"#005487"}
                                      strokeWidth="1.0"
                                      fill={"none"}
                                    />
                                  </span>
                                </div>
                              </React.Fragment>
                            ))
                        ) : (
                          <span className="noResults">123</span>
                        )}
                        {this.state.recentSearchesList.length > 3 &&
                          !this.state.showAllEnabled &&
                          this.renderShowAll()}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {!this.state.isLoading &&
                        this.state.searchResults.length > 0 ? (
                          this.state.searchResults
                            .filter(
                              (search: any, index: number) =>
                                this.state.showAllEnabled ||
                                (!this.state.showAllEnabled && index < 3)
                            )
                            .map((search: any) => (
                              <div
                                key={`searchResult${search.id}`}
                                className="search_results"
                              >
                                <div>
                                  {search.model === "Account" ? (
                                    <img
                                      src={`${
                                        search.photo
                                          ? search.photo
                                          : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                      }`}
                                      alt=""
                                      className="searchImage"
                                    />
                                  ) : (
                                    <div className="searchSvg">
                                      <HomeIcon />
                                    </div>
                                  )}

                                  <div className="searchName">
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: search.search_result,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))
                        ) : (
                          <span className="noResults">123</span>
                        )}
                        {this.state.searchResults.length > 3 &&
                          !this.state.showAllEnabled &&
                          this.renderShowAll()}
                      </React.Fragment>
                    )}
                  </div>
                )}
              </div>
              <div className={classes.headerProfilePicImgDiv}>
                <AccountCircleIcon className={classes.headerProfilePicImg} />
              </div>
            </Toolbar>
          </AppBar>
          {!this.handleConditionalRenderForUserProfile() && (
            <MenuArea>
              <MenuList>
                <Tabs
                  value={this.state.selectedTabId}
                  onChange={this.handleSelectNavbarItem}
                  data-test-id="layout-navbar-screen-tabs"
                  classes={{ indicator: classes.activeBorderBottom }}
                  variant="scrollable"
                >
                  {navbarMenuList.map((item: any) => (
                    <Tab
                      onClick={() =>
                        this.handleOnClickMenuNavbarItem(item.screen)
                      }
                      className={`NavbarTabs`}
                      tabIndex={item.id}
                      value={item.id}
                      id={`simple-tab-${item.id}`}
                      key={item.id}
                      label={
                        <ListItem className={classes.listItem}>
                          <ListItemIcon className={classes.listItemIcon}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listItemText}
                            primary={item.label}
                          />
                        </ListItem>
                      }
                    />
                  ))}
                </Tabs>
              </MenuList>
            </MenuArea>
          )}
        </Box>

        <Box height={"inherit"}>
          <HomeContent
            style={{
              marginTop: this.handleConditionaRenderForInitialScreens()
                ? "0px"
                : this.handleConditionalRenderForUserProfile()
                ? "65px"
                : "120px",
              padding: this.handleConditionaRenderForInitialScreens()
                ? "0px"
                : "20px",
              height: this.handleConditionalRenderForUserProfile()
                ? "auto"
                : "",
            }}
          >
            <Grid
              className={`${
                !this.handleConditionaRenderForInitialScreens()
                  ? `LayoutContainer ${classes.mainBodyContainer}`
                  : `LayoutContainer`
              } ${classes.LayoutContainerSpace}`}
              container
            >
              {/* <ContectCard /> */}

              {!this.handleConditionalRender() && (
                <Grid item xs={12} sm={12} md={4}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Grid container item xs={12}>
                      <Card className={classes.userCard}>
                        <Box
                          display={"flex"}
                          flexDirection="column"
                          justifyContent={"center"}
                          pt={"45px"}
                          pb={"35px"}
                          pr={"10px"}
                          pl={"10px"}
                        >
                          <CardMedia className={`${classes.media}`}>
                            <Avatar
                              aria-label="recipe"
                              className={classes.avatar}
                            >
                              {this.state.profileImageSrc ? (
                                <img
                                  src={this.state.profileImageSrc}
                                  className={classes.avatarImg}
                                  alt=""
                                />
                              ) : (
                                <img
                                  src={""}
                                  className={classes.avatarImg}
                                  alt=""
                                />
                              )}
                            </Avatar>
                          </CardMedia>
                          <CardContent className={classes.cardContect}>
                            <Typography
                              variant="body2"
                              component="p"
                              className={`Heading4 BoldFont FontColor6 TextCapitalize ${classes.cardtext}`}
                            >
                              Mr.User123{this.state.fullName}
                            </Typography>
                            <Typography
                              variant="body2"
                              component="p"
                              className={`Heading4 BoldFont FontColor2 ${classes.cardtext}`}
                            >
                              (He/Him) {this.state.userPronoun}
                            </Typography>
                            <Typography
                              variant="body2"
                              className={`Heading5 FontColor2 ${classes.cardtext}`}
                              component="p"
                            >
                              Abc city, ABC state.
                              {this.state.state || ""}
                              {this.state.city && ","}
                              {this.state.city || ""}
                            </Typography>

                            <Grid
                              container
                              spacing={2}
                              justifyContent="center"
                              style={{ marginTop: "15px" }}
                            >
                              <Grid item>
                                <Typography
                                  variant="body2"
                                  className={`Heading4 BoldFont FontColor6`}
                                  component="p"
                                >
                                  Post
                                </Typography>
                                <Typography
                                  className={`Heading5 BoldFont PrimaryColor1`}
                                >
                                  0 {getUserPostCount()}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <div className={classes.line}>|</div>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="body2"
                                  component="p"
                                  className={`Heading4 BoldFont FontColor6`}
                                >
                                  Followers
                                </Typography>
                                <Typography
                                  className={`Heading5 BoldFont PrimaryColor1`}
                                >
                                  {this.state.followerCount}
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid container item xs={12}>
                      <Card className={classes.userCommunity}>
                        <Box>
                          <Box
                            display={"flex"}
                            alignItems="center"
                            justifyContent={"flex-start"}
                            padding={"20px 20px"}
                          >
                            <Typography
                              component="span"
                              className="Heading3 BoldFont FontColor6"
                            >
                              Communities
                            </Typography>
                          </Box>
                          <Box style={webPage.upcomming}>
                            <img src={""} alt="" width="30px" />
                            <Typography
                              variant="body2"
                              className={`HeadingFont6 FontColor2 BoldFont ${classes.upcomingCommunityTypo}`}
                            >
                              Community 1
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid container item xs={12}>
                      <Card className={classes.userCommunity}>
                        <Box
                          display={"flex"}
                          alignItems="center"
                          justifyContent={"flex-start"}
                          padding={"20px 20px"}
                        >
                          <Typography
                            component="span"
                            className="Heading3 BoldFont FontColor6"
                          >
                            Upcoming Events
                          </Typography>
                        </Box>
                        <Box style={webPage.upcomming}>
                          <HomeIcon
                            className={`CursorPointer`}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke="#808080"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          <Typography
                            variant="body2"
                            className={`HeadingFont6 LinkEmbedTitle BoldFont ${classes.upcomingCommunityTypo}`}
                          >
                            Event 1
                          </Typography>
                        </Box>
                        <Box style={webPage.upcomming}>
                          <HomeIcon
                            className={`CursorPointer`}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke="#808080"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          <Typography
                            variant="body2"
                            className={`HeadingFont6 LinkEmbedTitle BoldFont ${classes.upcomingCommunityTypo}`}
                          >
                            Event 1
                          </Typography>
                        </Box>
                        <Box style={webPage.upcomming}>
                          <HomeIcon
                            className={`CursorPointer`}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke="#808080"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          <Typography
                            variant="body2"
                            className={`HeadingFont6 LinkEmbedTitle BoldFont ${classes.upcomingCommunityTypo}`}
                          >
                            Event 1
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              <Grid className={classes.mt32} item xs={12} sm={12} md={8}>
                {children}
              </Grid>
            </Grid>
          </HomeContent>
        </Box>
      </Box>
    );
    // Customizable Area End
  }
}

// Customizable Area Start

const webPage = {
  upcomming: {
    display: "flex",
    bgcolor: "#fff",
    alignItems: "center",
    borderRadius: "12px",
    background: "#fff",
    padding: "10px 20px",
    marginBottom: "3px",
  },
  imgStyle: {
    width: "20px",
    cursor: "pointer",
  },
};

const MenuArea = styled(Box)({
  color: "#333",
  borderRadius: "5px",
  paddingTop: "10px",
  marginTop: "54px",
  position: "fixed",
  width: "100%",
  zIndex: 1,
  background: "#fff",
});

const HomeContent = styled(Box)({
  backgroundColor: "#F4F4F4",
  height: "100%",
});

export default withStyles(styles, { withTheme: true })(Layout);
// Customizable Area End
