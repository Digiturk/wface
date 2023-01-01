import React, { useState } from "react";
import { 
  WGrid, WCard, WCardHeader,
  WCardContent, WAppBar, WToolBar,
  WNotificationBar, WBox, WButton,
  WButtonGroup, WIcon, WIconButton,
  WLoadingButton, WToggleButtonGroup, WToggleButton,
  WBasicDialog, WTextField, WMessageDialog,
  WList, WListItem, WListItemIcon,
  WListSubheader, WListItemText, WListItemSecondaryAction,
  WSwitch
} from "wface";
import makeStyles from "@mui/styles/makeStyles";

export interface DemoScreen4Props {
  data: any;
  onDataChanged: (data: any) => void;
  onForward: () => void;
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    justifyContent: "center",

    margin: "auto",
    padding: 20,
    marginTop: 100,
    width: 800,
    height: 600,
    backgroundColor: "white"
  },

  container: {
    width: 200
  }
}));

export const DemoScreen4: React.FC<DemoScreen4Props> = (
  props: DemoScreen4Props
) => {
  const { data, onDataChanged, onForward } = props;
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <WGrid container>
        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="App BAR" />
            <WCardContent>
              <>
                <WAppBar position="static">
                  <WToolBar>App Bar</WToolBar>
                </WAppBar>
                <WAppBar
                  style={{ marginTop: 10 }}
                  position="static"
                  color="secondary"
                >
                  <WToolBar>App Bar</WToolBar>
                </WAppBar>
              </>
            </WCardContent>
          </WCard>
        </WGrid>
        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="Notification" />
            <WCardContent>
              <>
                <WNotificationBar
                  text="Bu bir hata mesajıdır."
                  type="error"
                />
                <div style={{ height: 10 }} />
                <WNotificationBar
                  text="Bu bir uyarı mesajıdır."
                  type="warning"
                />
                <div style={{ height: 10 }} />
                <WNotificationBar
                  text="Bu bir bilgilendirme mesajıdır."
                  type="info"
                />
                <div style={{ height: 10 }} />
                <WNotificationBar
                  text="Bu bir başarılı işlem mesajıdır."
                  type="success"
                />
              </>
            </WCardContent>
          </WCard>
        </WGrid>

        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="Buton-Temel Kullanım" />
            <WCardContent>
              <>
                <WButton style={{ margin: 10 }}>
                  Default Button
                </WButton>
                <WButton style={{ margin: 10 }} color="secondary">
                  Secondary Color
                </WButton>
                <WButton style={{ margin: 10 }} disabled={true}>
                  Disabled
                </WButton>
              </>
            </WCardContent>
          </WCard>
        </WGrid>
        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="Farklı Görünümler -Buton" />
            <WCardContent>
              <>
                <WButton style={{ margin: 10 }} variant="text">
                  Text
                </WButton>

                <WButton style={{ margin: 10 }} variant="outlined">
                  Outlined
                </WButton>
                <WButton style={{ margin: 10 }} variant="contained">
                  Contained
                </WButton>
              </>
            </WCardContent>
          </WCard>
        </WGrid>
        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="Icon Kullanımı -Buton" />
            <WCardContent>
              <>
                <WButton style={{ margin: 10 }}>
                  <WIcon style={{ marginRight: 10 }}>send</WIcon>
                  Send
                </WButton>
                <WButton style={{ margin: 10 }}>
                  Check
                  <WIcon style={{ marginLeft: 10 }}>check</WIcon>
                </WButton>
              </>
            </WCardContent>
          </WCard>
        </WGrid>
        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="Farklı Görünümler -Buton and  Loading Buton" />
            <WCardContent>
              <>
                <>
                  <WIconButton style={{ margin: 10 }} icon="send" />
                  <WIconButton
                    style={{ margin: 10 }}
                    color="secondary"
                    icon="code"
                  />
                  <WIconButton
                    style={{ margin: 10 }}
                    disabled={true}
                    icon="block"
                  />

                  <WLoadingButton style={{ margin: 10 }} isLoading={true}>
                    Linear
                  </WLoadingButton>
                  {/* //<WLoadingButton style={{margin: 10}} isLoading={true} progressType="circular">Circular</WLoadingButton>  */}
                </>
              </>
            </WCardContent>
          </WCard>
        </WGrid>

        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="Togglw Buton" />
            <WCardContent>
              <>
                <WToggleButtonGroup exclusive aria-label="text alignment">
                  <WToggleButton value="left" aria-label="left aligned">
                    <WIcon>format_align_left</WIcon>
                  </WToggleButton>
                  <WToggleButton value="center" aria-label="centered">
                    <WIcon>format_align_center</WIcon>
                  </WToggleButton>
                  <WToggleButton value="right" aria-label="right aligned">
                    <WIcon>format_align_right</WIcon>
                  </WToggleButton>
                  <WToggleButton
                    value="justify"
                    aria-label="justified"
                    disabled
                  >
                    <WIcon>format_align_justify</WIcon>
                  </WToggleButton>
                </WToggleButtonGroup>
              </>
            </WCardContent>
          </WCard>
        </WGrid>
        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader />
            <WCardContent>
              <>
                <WButton
                  style={{ margin: 10, fontSize: 30 }}
                  color="secondary"
                  onClick={() => setIsOpen(true)}
                >
                  Dialogu Aç
                </WButton>
                <WBasicDialog
                  title="Başlık"
                  open={isOpen}
                  actions={[
                    { text: "Kapat", onClick: () => setIsOpen(false) },
                    {
                      text: "Tamam",
                      onClick: () => alert("Tamam tıklandı")
                    }
                  ]}
                >
                  <WTextField label="Dialog içeriği" />
                </WBasicDialog>
              </>
            </WCardContent>
          </WCard>
        </WGrid>

        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="WMessageDialog" />
            <WCardContent>
              <>
                <WButton onClick={() => setIsOpen(true)}>
                  Dialogu Aç
                </WButton>
                <WMessageDialog
                  title="Başlık"
                  open={isOpen}
                  buttons="YesNo"
                  onButtonClick={(event, button) => {
                    alert(button + " tıklandı");
                    setIsOpen(false);
                  }}
                  text="WMessageDialog içeriği"
                />
              </>
            </WCardContent>
          </WCard>
        </WGrid>
        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="Farklı Görünümler -Buton" />
            <WCardContent>
              <>
                <WList
                  style={{ backgroundColor: "#fff", maxWidth: 300 }}
                  subheader={
                    <WListSubheader>Settings</WListSubheader>
                  }
                >
                  <WListItem>
                    <WListItemIcon>
                      <WIcon>wifi</WIcon>
                    </WListItemIcon>
                    <WListItemText primary="Wi-Fi" />
                    <WListItemSecondaryAction>
                      <WSwitch />
                    </WListItemSecondaryAction>
                  </WListItem>
                  <WListItem>
                    <WListItemIcon>
                      <WIcon>bluetooth</WIcon>
                    </WListItemIcon>
                    <WListItemText primary="Bluetooth" />
                    <WListItemSecondaryAction>
                      <WSwitch />
                    </WListItemSecondaryAction>
                  </WListItem>
                </WList>
              </>
            </WCardContent>
          </WCard>
        </WGrid>

        <WGrid item xl={6} lg={6}>
          <WCard>
            <WCardHeader title="Farklı Görünümler -Buton" />
            <WCardContent>
            <>
        <WGrid container spacing={3} style={{ padding: 30 }}>
          <WGrid item xs={12} md={6}>
            <WGrid
              container
              spacing={1}
              direction="column"
              alignItems="center"
            >
              <WGrid item>
                <WButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                >
                  <WButton>One</WButton>
                  <WButton>Two</WButton>
                  <WButton>Three</WButton>
                </WButtonGroup>
              </WGrid>
              <WGrid item>
                <WButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <WButton>One</WButton>
                  <WButton>Two</WButton>
                  <WButton>Three</WButton>
                </WButtonGroup>
              </WGrid>
              <WGrid item>
                <WButtonGroup
                  color="secondary"
                  size="large"
                  aria-label="large outlined secondary button group"
                >
                  <WButton>One</WButton>
                  <WButton>Two</WButton>
                  <WButton>Three</WButton>
                </WButtonGroup>
              </WGrid>
            </WGrid>
          </WGrid>
          <WGrid item xs={12} md={6}>
            <WGrid
              container
              spacing={1}
              direction="column"
              alignItems="center"
            >
              <WGrid item>
                <WButtonGroup
                  variant="contained"
                  size="small"
                  aria-label="small contained button group"
                >
                  <WButton>One</WButton>
                  <WButton>Two</WButton>
                  <WButton>Three</WButton>
                </WButtonGroup>
              </WGrid>
              <WGrid item>
                <WButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="full-width contained primary button group"
                >
                  <WButton>One</WButton>
                  <WButton>Two</WButton>
                  <WButton>Three</WButton>
                </WButtonGroup>
              </WGrid>
              <WGrid item>
                <WButtonGroup
                  variant="contained"
                  color="secondary"
                  size="large"
                  aria-label="large contained secondary button group"
                >
                  <WButton>One</WButton>
                  <WButton>Two</WButton>
                  <WButton>Three</WButton>
                </WButtonGroup>
              </WGrid>
            </WGrid>
          </WGrid>
          <WGrid item xs={12}>
            <WButtonGroup
              fullWidth
              aria-label="full width outlined button group"
            >
              <WButton>Full</WButton>
              <WButton>width</WButton>
              <WButton>ButtonGroup</WButton>
            </WButtonGroup>
          </WGrid>
        </WGrid>
      </>
            </WCardContent>
          </WCard>
        </WGrid>
      </WGrid>

      <WBox display="flex" justifyContent="flex-end" mt={2}></WBox>
    </>
  );
};