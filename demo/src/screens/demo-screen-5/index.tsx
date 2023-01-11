import React, { useState } from "react";
import {
  WGrid, WCard, WCardHeader,
  WCardContent, WForm, WFormField,
  WFormValidation, WCheckbox, WDateTimePicker,
  WSelect, WTextField, WIcon,
  WTabContainer, WTabPage, WList,
  WListItem, WAvatar, WListItemText,
  WListItemSecondaryAction, WBadge, WIconButton,
  WAppBar, WTabs, WTab,
  WTypography, WButton, WLink,
  WRating, WLinearProgress, WTable,
  WChip
} from "wface";

export const DemoScreen5 = () => {
  const [dateTime, setDateTime] = useState<any>();
  return (
    <WGrid container>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="FORM-VALİDASYON" />
          <WCardContent>
            <>
              <WForm
                initialValues={{ company: "Digiturk", year: 1987 }}
                onSubmit={(values) =>
                  alert(values.company + ", " + values.year)
                }
                validationSchema={WFormValidation.object().shape({
                  company: WFormValidation.string().required().max(10),
                  year: WFormValidation.number()
                    .required()
                    .max(2000)
                    .min(1980)
                })}
              >
                <WFormField.TextField name="company" label="Şirket" />
                <WFormField.TextField name="year" label="Yıl" />
                <WFormField.Submit>GÖSTER</WFormField.Submit>
              </WForm>
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="ChechkBox" />
          <WCardContent>
            <>
              <WCheckbox label="Checkbox 1" checked />
              <WCheckbox label="Checkbox 2" checked />
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="DatePicker" />
          <WCardContent>
            <>
              <WDateTimePicker
                id="dtp"
                value={{ dateTime }}
                onChange={(dateTime: any) => setDateTime({ dateTime })}
              />
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WSELECT" />
          <WCardContent>
            <>
              <WSelect
                label="Şehirler"
                options={[
                  { label: "Adana", value: "1" },
                  { label: "Gaziantep", value: "27" },
                  { label: "İstanbul", value: "34" },
                  { label: "Şanlıurfa", value: "63" }
                ]}
                isMulti
              />
            </>
          </WCardContent>
        </WCard>
      </WGrid>

      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WTextField" />
          <WCardContent>
            <>
              <WTextField label="Name" style={{ margin: 10 }} />
              <br />
              <WTextField
                label="Surname"
                style={{ margin: 10 }}
                leftButtons={[
                  {
                    icon: <WIcon>add</WIcon>,
                    onClick: () => alert("add button clicked")
                  }
                ]}
                rightButtons={[
                  {
                    icon: <WIcon>save</WIcon>,
                    onClick: () => alert("save button clicked")
                  }
                ]}
              />
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WTabContainer defaultValue={1} centered>
            <WTabPage icon={<WIcon>face</WIcon>}>
              Page 1
            </WTabPage>
            <WTabPage label="Tab2">Page 2</WTabPage>
            <WTabPage label="Tab3">Page 3</WTabPage>
          </WTabContainer>
        </WCard>
        <WCardHeader />
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WList style={{ backgroundColor: "#fff" }}>
            <WListItem key="0">
              <WAvatar
                alt="First Item"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
              <WListItemText primary="First Item" />
              <WListItemSecondaryAction>
                <WCheckbox />
              </WListItemSecondaryAction>
            </WListItem>
            <WListItem key="1">
              <WAvatar
                alt="Second Item"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
              <WListItemText primary="Second Item" />
              <WListItemSecondaryAction>
                <WCheckbox />
              </WListItemSecondaryAction>
            </WListItem>
          </WList>
          <WCardHeader />
        </WCard>


      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="Resim Avatarlar" />
          <WCardContent>
            <>
              <WAvatar
                style={{ margin: 10 }}
                alt="bein HD1"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
              <WAvatar
                style={{ margin: 10, width: 60, height: 60 }}
                alt="bein HD1"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="Icon ve Harf Avatarlar" />
          <WCardContent>
            <WAvatar style={{ margin: 10, backgroundColor: "#e91e63" }}>
              <WIcon>send</WIcon>
            </WAvatar>

            <>
              <WAvatar
                style={{ margin: 10, backgroundColor: "#e91e63" }}
              >
                W
              </WAvatar>
              <WAvatar
                style={{ margin: 10, backgroundColor: "#e91e63" }}
              >
                F
              </WAvatar>
              <WAvatar
                style={{ margin: 10, backgroundColor: "#e91e63" }}
              >
                A
              </WAvatar>
              <WAvatar
                style={{ margin: 10, backgroundColor: "#e91e63" }}
              >
                C
              </WAvatar>
              <WAvatar
                style={{ margin: 10, backgroundColor: "#e91e63" }}
              >
                E
              </WAvatar>
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WBadge" />
          <WCardContent>
            <div>
              <div>
                <WBadge
                  style={{ margin: 20 }}
                  badgeContent={4}
                  color="primary"
                >
                  <WIcon>mail</WIcon>
                </WBadge>
                <WBadge
                  style={{ margin: 20 }}
                  badgeContent={10}
                  color="secondary"
                >
                  <WIcon>mail</WIcon>
                </WBadge>
                <WIconButton
                  aria-label="4 pending messages"
                  style={{ margin: 20 }}
                >
                  <WBadge badgeContent={4} color="primary">
                    <WIcon>mail</WIcon>
                  </WBadge>
                </WIconButton>
              </div>
              <WAppBar position="static" style={{ margin: 20 }}>
                <WTabs value={0}>
                  <WTab
                    label={
                      <WBadge
                        style={{ padding: "0 8px" }}
                        color="secondary"
                        badgeContent={4}
                      >
                        Item One
                      </WBadge>
                    }
                  />
                  <WTab label="Item Two" />
                  <WTab label="Item Three" />
                </WTabs>
              </WAppBar>
              <WBadge
                color="primary"
                badgeContent={4}
                style={{ margin: 20 }}
              >
                <WTypography style={{ padding: "0 8px" }}>
                  Typography
                </WTypography>
              </WBadge>
              <WBadge
                color="secondary"
                badgeContent={4}
                style={{ margin: 20 }}
              >
                <WButton variant="contained">Button</WButton>
              </WBadge>
            </div>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WLink" />
          <WCardContent>
            <WTypography>
              <WLink href="javascript:;" style={{ margin: 5 }}>
                Link
              </WLink>
              <WLink
                href="javascript:;"
                color="inherit"
                style={{ margin: 5 }}
              >
                {'color="inherit"'}
              </WLink>
              <WLink
                href="javascript:;"
                variant="body2"
                style={{ margin: 5 }}
              >
                {'variant="body2"'}
              </WLink>
            </WTypography>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WIcon" />
          <WCardContent>
            <>
              <>
                <WIcon style={{ margin: 10 }}>send</WIcon>
                <WIcon style={{ margin: 10 }} color="primary">
                  send
                </WIcon>
                <WIcon style={{ margin: 10 }} color="secondary">
                  send
                </WIcon>
              </>
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WRating" />
          <WCardContent>
            <>
              <WRating />
              <br />
              <WRating precision={0.5} />
              <br />
              <WRating max={10} />
              <br />
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WLinearProgress" />
          <WCardContent>
            <>
              <WLinearProgress style={{ margin: 10 }} />
              <WLinearProgress style={{ margin: 10, fontSize: 50 }} />
              <WLinearProgress
                style={{ margin: 10 }}
                color="secondary"
              />
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="Determined" />
          <WCardContent>
            <>
              <WLinearProgress
                style={{ margin: 10 }}
                variant="determinate"
                value={25}
              />
              <WLinearProgress
                style={{ margin: 10 }}
                variant="determinate"
                value={50}
              />
              <WLinearProgress
                style={{ margin: 10 }}
                variant="determinate"
                value={75}
              />
              <WLinearProgress
                style={{ margin: 10 }}
                variant="determinate"
                value={100}
              />
            </>
          </WCardContent>
        </WCard>
      </WGrid>
      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader
            title="
              Buffer"
          />
          <WCardContent>
            <>
              <WLinearProgress
                style={{ margin: 10 }}
                variant="buffer"
                value={25}
                valueBuffer={50}
              />
              <WLinearProgress
                style={{ margin: 10 }}
                variant="buffer"
                value={50}
                valueBuffer={60}
              />
              <WLinearProgress
                style={{ margin: 10 }}
                variant="buffer"
                value={75}
                valueBuffer={85}
              />
              <WLinearProgress
                style={{ margin: 10 }}
                variant="buffer"
                value={100}
                valueBuffer={100}
              />
            </>
          </WCardContent>
        </WCard>
      </WGrid>

      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WTable" />
          <WCardContent>
            <>
              {" "}
              <WTable
                columns={[
                  { title: "Adı", field: "name" },
                  { title: "Soyadı", field: "surname" },
                  {
                    title: "Doğum Yılı",
                    field: "birthYear",
                    type: "numeric"
                  },
                  {
                    title: "Doğum Yeri",
                    field: "birthCity",
                    lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
                  }
                ]}
                data={[
                  {
                    name: "Mehmet",
                    surname: "Baran",
                    birthYear: 1987,
                    birthCity: 63
                  }
                ]}
                title="Temel Kullanım"
              />
            </>
          </WCardContent>
        </WCard>
      </WGrid>

      <WGrid item xl={6} lg={6}>
        <WCard>
          <WCardHeader title="WChip" />
          <WCardContent>
            <>
              {" "}
              <>
                <WChip label="Basic Chip" style={{ margin: 10 }} />
                <WChip
                  avatar={<WAvatar>MB</WAvatar>}
                  label="Clickable Chip"
                  onClick={() => alert("Chip tıklandı")}
                  style={{ margin: 10 }}
                />
                <WChip
                  avatar={
                    <WAvatar>
                      <WIcon>face</WIcon>
                    </WAvatar>
                  }
                  label="Clickable Deletable Chip"
                  onClick={() => alert("Chip tıklandı")}
                  style={{ margin: 10 }}
                />
                <WChip
                  icon={<WIcon>face</WIcon>}
                  label="Clickable Deletable Chip"
                  onClick={() => alert("Chip tıklandı")}
                  style={{ margin: 10 }}
                />
                <WChip
                  label="Custom delete icon Chip"
                  onClick={() => alert("Chip tıklandı")}
                  deleteIcon={<WIcon>done</WIcon>}
                  style={{ margin: 10 }}
                />
                <WChip
                  avatar={<WAvatar>MB</WAvatar>}
                  label="Primary Clickable Chip"
                  clickable
                  color="primary"
                  deleteIcon={<WIcon>clear</WIcon>}
                  onDelete={() => alert("Delete tıklandı")}
                  style={{ margin: 10 }}
                />
                <WChip
                  icon={<WIcon>done</WIcon>}
                  label="Primary Clickable Chip"
                  clickable
                  color="primary"
                  deleteIcon={<WIcon>face</WIcon>}
                  style={{ margin: 10 }}
                />
                <WChip
                  avatar={
                    <WAvatar>
                      <WIcon>face</WIcon>
                    </WAvatar>
                  }
                  label="Deletable Secondary Chip"
                  color="secondary"
                  style={{ margin: 10 }}
                />
                <WChip
                  icon={<WIcon>face</WIcon>}
                  label="Deletable Secondary Chip"
                  color="secondary"
                  style={{ margin: 10 }}
                />
              </>{" "}
            </>
          </WCardContent>
        </WCard>
      </WGrid>
    </WGrid>
  );
};