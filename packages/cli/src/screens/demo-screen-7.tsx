import React, { useEffect, useState } from "react";
import * as WFace from "@wface/components";
import { WFormField } from "@wface/components";
import makeStyles from "@mui/styles/makeStyles";
import { size } from "lodash";

export interface DemoScreen7Props {
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

export const DemoScreen7: React.FC<DemoScreen7Props> = (
  props: DemoScreen7Props
) => {
  const { data, onDataChanged, onForward } = props;
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <WFace.WGrid container>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="App BAR" />
            <WFace.WCardContent>
              <>
                <WFace.WAppBar position="static">
                  <WFace.WToolBar>App Bar</WFace.WToolBar>
                </WFace.WAppBar>
                <WFace.WAppBar
                  style={{ marginTop: 10 }}
                  position="static"
                  color="secondary"
                >
                  <WFace.WToolBar>App Bar</WFace.WToolBar>
                </WFace.WAppBar>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Notification" />
            <WFace.WCardContent>
              <>
                <WFace.WNotificationBar
                  text="Bu bir hata mesajıdır."
                  type="error"
                />
                <div style={{ height: 10 }} />
                <WFace.WNotificationBar
                  text="Bu bir uyarı mesajıdır."
                  type="warning"
                />
                <div style={{ height: 10 }} />
                <WFace.WNotificationBar
                  text="Bu bir bilgilendirme mesajıdır."
                  type="info"
                />
                <div style={{ height: 10 }} />
                <WFace.WNotificationBar
                  text="Bu bir başarılı işlem mesajıdır."
                  type="success"
                />
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>

        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Buton-Temel Kullanım" />
            <WFace.WCardContent>
              <>
                <WFace.WButton style={{ margin: 10 }}>
                  Default Button
                </WFace.WButton>
                <WFace.WButton style={{ margin: 10 }} color="secondary">
                  Secondary Color
                </WFace.WButton>
                <WFace.WButton style={{ margin: 10 }} disabled={true}>
                  Disabled
                </WFace.WButton>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Farklı Görünümler -Buton" />
            <WFace.WCardContent>
              <>
                <WFace.WButton style={{ margin: 10 }} variant="text">
                  Text
                </WFace.WButton>

                <WFace.WButton style={{ margin: 10 }} variant="outlined">
                  Outlined
                </WFace.WButton>
                <WFace.WButton style={{ margin: 10 }} variant="contained">
                  Contained
                </WFace.WButton>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Icon Kullanımı -Buton" />
            <WFace.WCardContent>
              <>
                <WFace.WButton style={{ margin: 10 }}>
                  <WFace.WIcon style={{ marginRight: 10 }}>send</WFace.WIcon>
                  Send
                </WFace.WButton>
                <WFace.WButton style={{ margin: 10 }}>
                  Check
                  <WFace.WIcon style={{ marginLeft: 10 }}>check</WFace.WIcon>
                </WFace.WButton>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Farklı Görünümler -Buton and  Loading Buton" />
            <WFace.WCardContent>
              <>
                <>
                  <WFace.WIconButton style={{ margin: 10 }} icon="send" />
                  <WFace.WIconButton
                    style={{ margin: 10 }}
                    color="secondary"
                    icon="code"
                  />
                  <WFace.WIconButton
                    style={{ margin: 10 }}
                    disabled={true}
                    icon="block"
                  />

                  <WFace.WLoadingButton style={{ margin: 10 }} isLoading={true}>
                    Linear
                  </WFace.WLoadingButton>
                  {/* //<WFace.WLoadingButton style={{margin: 10}} isLoading={true} progressType="circular">Circular</WFace.WLoadingButton>  */}
                </>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>

        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Togglw Buton" />
            <WFace.WCardContent>
              <>
                <WFace.WToggleButtonGroup exclusive aria-label="text alignment">
                  <WFace.WToggleButton value="left" aria-label="left aligned">
                    <WFace.WIcon>format_align_left</WFace.WIcon>
                  </WFace.WToggleButton>
                  <WFace.WToggleButton value="center" aria-label="centered">
                    <WFace.WIcon>format_align_center</WFace.WIcon>
                  </WFace.WToggleButton>
                  <WFace.WToggleButton value="right" aria-label="right aligned">
                    <WFace.WIcon>format_align_right</WFace.WIcon>
                  </WFace.WToggleButton>
                  <WFace.WToggleButton
                    value="justify"
                    aria-label="justified"
                    disabled
                  >
                    <WFace.WIcon>format_align_justify</WFace.WIcon>
                  </WFace.WToggleButton>
                </WFace.WToggleButtonGroup>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader />
            <WFace.WCardContent>
              <>
                <WFace.WButton
                  style={{ margin: 10, fontSize: 30 }}
                  color="secondary"
                  onClick={() => setIsOpen(true)}
                >
                  Dialogu Aç
                </WFace.WButton>
                <WFace.WBasicDialog
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
                  <WFace.WTextField label="Dialog içeriği" />
                </WFace.WBasicDialog>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>

        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="WMessageDialog" />
            <WFace.WCardContent>
              <>
                <WFace.WButton onClick={() => setIsOpen(true)}>
                  Dialogu Aç
                </WFace.WButton>
                <WFace.WMessageDialog
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
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Farklı Görünümler -Buton" />
            <WFace.WCardContent>
              <>
                <WFace.WList
                  style={{ backgroundColor: "#fff", maxWidth: 300 }}
                  subheader={
                    <WFace.WListSubheader>Settings</WFace.WListSubheader>
                  }
                >
                  <WFace.WListItem>
                    <WFace.WListItemIcon>
                      <WFace.WIcon>wifi</WFace.WIcon>
                    </WFace.WListItemIcon>
                    <WFace.WListItemText primary="Wi-Fi" />
                    <WFace.WListItemSecondaryAction>
                      <WFace.WSwitch />
                    </WFace.WListItemSecondaryAction>
                  </WFace.WListItem>
                  <WFace.WListItem>
                    <WFace.WListItemIcon>
                      <WFace.WIcon>bluetooth</WFace.WIcon>
                    </WFace.WListItemIcon>
                    <WFace.WListItemText primary="Bluetooth" />
                    <WFace.WListItemSecondaryAction>
                      <WFace.WSwitch />
                    </WFace.WListItemSecondaryAction>
                  </WFace.WListItem>
                </WFace.WList>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>

        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Farklı Görünümler -Buton" />
            <WFace.WCardContent>
            <>
        <WFace.WGrid container spacing={3} style={{ padding: 30 }}>
          <WFace.WGrid item xs={12} md={6}>
            <WFace.WGrid
              container
              spacing={1}
              direction="column"
              alignItems="center"
            >
              <WFace.WGrid item>
                <WFace.WButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                >
                  <WFace.WButton>One</WFace.WButton>
                  <WFace.WButton>Two</WFace.WButton>
                  <WFace.WButton>Three</WFace.WButton>
                </WFace.WButtonGroup>
              </WFace.WGrid>
              <WFace.WGrid item>
                <WFace.WButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <WFace.WButton>One</WFace.WButton>
                  <WFace.WButton>Two</WFace.WButton>
                  <WFace.WButton>Three</WFace.WButton>
                </WFace.WButtonGroup>
              </WFace.WGrid>
              <WFace.WGrid item>
                <WFace.WButtonGroup
                  color="secondary"
                  size="large"
                  aria-label="large outlined secondary button group"
                >
                  <WFace.WButton>One</WFace.WButton>
                  <WFace.WButton>Two</WFace.WButton>
                  <WFace.WButton>Three</WFace.WButton>
                </WFace.WButtonGroup>
              </WFace.WGrid>
            </WFace.WGrid>
          </WFace.WGrid>
          <WFace.WGrid item xs={12} md={6}>
            <WFace.WGrid
              container
              spacing={1}
              direction="column"
              alignItems="center"
            >
              <WFace.WGrid item>
                <WFace.WButtonGroup
                  variant="contained"
                  size="small"
                  aria-label="small contained button group"
                >
                  <WFace.WButton>One</WFace.WButton>
                  <WFace.WButton>Two</WFace.WButton>
                  <WFace.WButton>Three</WFace.WButton>
                </WFace.WButtonGroup>
              </WFace.WGrid>
              <WFace.WGrid item>
                <WFace.WButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="full-width contained primary button group"
                >
                  <WFace.WButton>One</WFace.WButton>
                  <WFace.WButton>Two</WFace.WButton>
                  <WFace.WButton>Three</WFace.WButton>
                </WFace.WButtonGroup>
              </WFace.WGrid>
              <WFace.WGrid item>
                <WFace.WButtonGroup
                  variant="contained"
                  color="secondary"
                  size="large"
                  aria-label="large contained secondary button group"
                >
                  <WFace.WButton>One</WFace.WButton>
                  <WFace.WButton>Two</WFace.WButton>
                  <WFace.WButton>Three</WFace.WButton>
                </WFace.WButtonGroup>
              </WFace.WGrid>
            </WFace.WGrid>
          </WFace.WGrid>
          <WFace.WGrid item xs={12}>
            <WFace.WButtonGroup
              fullWidth
              aria-label="full width outlined button group"
            >
              <WFace.WButton>Full</WFace.WButton>
              <WFace.WButton>width</WFace.WButton>
              <WFace.WButton>ButtonGroup</WFace.WButton>
            </WFace.WButtonGroup>
          </WFace.WGrid>
        </WFace.WGrid>
      </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
      </WFace.WGrid>

      <WFace.WBox display="flex" justifyContent="flex-end" mt={2}></WFace.WBox>
    </>
  );
};
