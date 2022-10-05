import React, { useEffect, useState } from "react";
import * as WFace from "@wface/components";

//type

export const DemoScreen8 = (props) => {
  const [dateTime, setDateTime] = useState<any>();
  return (
    <WFace.WGrid container>
      <WFace.WGrid item xl={6} lg={6}>
        <WFace.WCard>
          <WFace.WCardHeader title="FORM-VALİDASYON" />
          <WFace.WCardContent>
            <>
              <WFace.WForm
                initialValues={{ company: "Digiturk", year: 1987 }}
                onSubmit={(values) =>
                  alert(values.company + ", " + values.year)
                }
                validationSchema={WFace.WFormValidation.object().shape({
                  company: WFace.WFormValidation.string().required().max(10),
                  year: WFace.WFormValidation.number()
                    .required()
                    .max(2000)
                    .min(1980)
                })}
              >
                <WFace.WFormField.TextField name="company" label="Şirket" />
                <WFace.WFormField.TextField name="year" label="Yıl" />
                <WFace.WFormField.Submit>GÖSTER</WFace.WFormField.Submit>
              </WFace.WForm>
            </>
          </WFace.WCardContent>
        </WFace.WCard>
      </WFace.WGrid>
      <WFace.WGrid item xl={6} lg={6}>
        <WFace.WCard>
          <WFace.WCardHeader title="ChechkBox" />
          <WFace.WCardContent>
            <>
              <WFace.WCheckbox label="Checkbox 1" checked />
              <WFace.WCheckbox label="Checkbox 2" checked />
            </>
          </WFace.WCardContent>
        </WFace.WCard>
      </WFace.WGrid>
      <WFace.WGrid item xl={6} lg={6}>
        <WFace.WCard>
          <WFace.WCardHeader title="DatePicker" />
          <WFace.WCardContent>
            <>
              <WFace.WDateTimePicker
                id="dtp"
                value={{ dateTime }}
                onChange={(dateTime: any) => setDateTime({ dateTime })}
              />
            </>
          </WFace.WCardContent>
        </WFace.WCard>
      </WFace.WGrid>
      <WFace.WGrid item xl={6} lg={6}>
        <WFace.WCard>
          <WFace.WCardHeader title="WSELECT" />
          <WFace.WCardContent>
            <>
              <WFace.WSelect
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
          </WFace.WCardContent>
        </WFace.WCard>
      </WFace.WGrid>

      <WFace.WGrid item xl={6} lg={6}>
        <WFace.WCard>
          <WFace.WCardHeader title="WTextField" />
          <WFace.WCardContent>
            <>
              <WFace.WTextField label="Name" style={{ margin: 10 }} />
              <br />
              <WFace.WTextField
                label="Surname"
                style={{ margin: 10 }}
                leftButtons={[
                  {
                    icon: <WFace.WIcon>add</WFace.WIcon>,
                    onClick: () => alert("add button clicked")
                  }
                ]}
                rightButtons={[
                  {
                    icon: <WFace.WIcon>save</WFace.WIcon>,
                    onClick: () => alert("save button clicked")
                  }
                ]}
              />
            </>
          </WFace.WCardContent>
        </WFace.WCard>
      </WFace.WGrid>
      <WFace.WGrid item xl={6} lg={6}>
        <WFace.WCard>
          <WFace.WTabContainer defaultValue={1} centered>
            <WFace.WTabPage icon={<WFace.WIcon>face</WFace.WIcon>}>
              Page 1
            </WFace.WTabPage>
            <WFace.WTabPage label="Tab2">Page 2</WFace.WTabPage>
            <WFace.WTabPage label="Tab3">Page 3</WFace.WTabPage>
          </WFace.WTabContainer>
        </WFace.WCard>
        <WFace.WCardHeader  />
      </WFace.WGrid>
      <WFace.WGrid item xl={6} lg={6}>
        <WFace.WCard>
          <WFace.WList style={{ backgroundColor: "#fff" }}>
            <WFace.WListItem key="0">
              <WFace.WAvatar
                alt="First Item"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
              <WFace.WListItemText primary="First Item" />
              <WFace.WListItemSecondaryAction>
                <WFace.WCheckbox />
              </WFace.WListItemSecondaryAction>
            </WFace.WListItem>
            <WFace.WListItem key="1">
              <WFace.WAvatar
                alt="Second Item"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
              <WFace.WListItemText primary="Second Item" />
              <WFace.WListItemSecondaryAction>
                <WFace.WCheckbox />
              </WFace.WListItemSecondaryAction>
            </WFace.WListItem>
          </WFace.WList>
          <WFace.WCardHeader />
        </WFace.WCard>

        
      </WFace.WGrid>
      <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Resim Avatarlar" />
            <WFace.WCardContent>
              <>
                <WFace.WAvatar
                  style={{ margin: 10 }}
                  alt="bein HD1"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                />
                <WFace.WAvatar
                  style={{ margin: 10, width: 60, height: 60 }}
                  alt="bein HD1"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                />
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="Icon ve Harf Avatarlar" />
            <WFace.WCardContent>
              <WFace.WAvatar style={{ margin: 10, backgroundColor: "#e91e63" }}>
                <WFace.WIcon>send</WFace.WIcon>
              </WFace.WAvatar>

              <>
                <WFace.WAvatar
                  style={{ margin: 10, backgroundColor: "#e91e63" }}
                >
                  W
                </WFace.WAvatar>
                <WFace.WAvatar
                  style={{ margin: 10, backgroundColor: "#e91e63" }}
                >
                  F
                </WFace.WAvatar>
                <WFace.WAvatar
                  style={{ margin: 10, backgroundColor: "#e91e63" }}
                >
                  A
                </WFace.WAvatar>
                <WFace.WAvatar
                  style={{ margin: 10, backgroundColor: "#e91e63" }}
                >
                  C
                </WFace.WAvatar>
                <WFace.WAvatar
                  style={{ margin: 10, backgroundColor: "#e91e63" }}
                >
                  E
                </WFace.WAvatar>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="WBadge" />
            <WFace.WCardContent>
              <div>
                <div>
                  <WFace.WBadge
                    style={{ margin: 20 }}
                    badgeContent={4}
                    color="primary"
                  >
                    <WFace.WIcon>mail</WFace.WIcon>
                  </WFace.WBadge>
                  <WFace.WBadge
                    style={{ margin: 20 }}
                    badgeContent={10}
                    color="secondary"
                  >
                    <WFace.WIcon>mail</WFace.WIcon>
                  </WFace.WBadge>
                  <WFace.WIconButton
                    aria-label="4 pending messages"
                    style={{ margin: 20 }}
                  >
                    <WFace.WBadge badgeContent={4} color="primary">
                      <WFace.WIcon>mail</WFace.WIcon>
                    </WFace.WBadge>
                  </WFace.WIconButton>
                </div>
                <WFace.WAppBar position="static" style={{ margin: 20 }}>
                  <WFace.WTabs value={0}>
                    <WFace.WTab
                      label={
                        <WFace.WBadge
                          style={{ padding: "0 8px" }}
                          color="secondary"
                          badgeContent={4}
                        >
                          Item One
                        </WFace.WBadge>
                      }
                    />
                    <WFace.WTab label="Item Two" />
                    <WFace.WTab label="Item Three" />
                  </WFace.WTabs>
                </WFace.WAppBar>
                <WFace.WBadge
                  color="primary"
                  badgeContent={4}
                  style={{ margin: 20 }}
                >
                  <WFace.WTypography style={{ padding: "0 8px" }}>
                    Typography
                  </WFace.WTypography>
                </WFace.WBadge>
                <WFace.WBadge
                  color="secondary"
                  badgeContent={4}
                  style={{ margin: 20 }}
                >
                  <WFace.WButton variant="contained">Button</WFace.WButton>
                </WFace.WBadge>
              </div>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="WLink" />
            <WFace.WCardContent>
              <WFace.WTypography>
                <WFace.WLink href="javascript:;" style={{ margin: 5 }}>
                  Link
                </WFace.WLink>
                <WFace.WLink
                  href="javascript:;"
                  color="inherit"
                  style={{ margin: 5 }}
                >
                  {'color="inherit"'}
                </WFace.WLink>
                <WFace.WLink
                  href="javascript:;"
                  variant="body2"
                  style={{ margin: 5 }}
                >
                  {'variant="body2"'}
                </WFace.WLink>
              </WFace.WTypography>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader title="WIcon" />
            <WFace.WCardContent>
              <>
                <>
                  <WFace.WIcon style={{ margin: 10 }}>send</WFace.WIcon>
                  <WFace.WIcon style={{ margin: 10 }} color="primary">
                    send
                  </WFace.WIcon>
                  <WFace.WIcon style={{ margin: 10 }} color="secondary">
                    send
                  </WFace.WIcon>
                </>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader
              title="
WRating"
            />
            <WFace.WCardContent>
              <>
                <WFace.WRating />
                <br />
                <WFace.WRating precision={0.5} />
                <br />
                <WFace.WRating max={10} />
                <br />
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader
              title="
              WLinearProgress"
            />
            <WFace.WCardContent>
              <>
                <>
                  <WFace.WLinearProgress style={{ margin: 10 }} />
                  <WFace.WLinearProgress style={{ margin: 10, fontSize: 50 }} />
                  <WFace.WLinearProgress
                    style={{ margin: 10 }}
                    color="secondary"
                  />
                </>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader
              title="
Determined"
            />
            <WFace.WCardContent>
              <>
                <WFace.WLinearProgress
                  style={{ margin: 10 }}
                  variant="determinate"
                  value={25}
                />
                <WFace.WLinearProgress
                  style={{ margin: 10 }}
                  variant="determinate"
                  value={50}
                />
                <WFace.WLinearProgress
                  style={{ margin: 10 }}
                  variant="determinate"
                  value={75}
                />
                <WFace.WLinearProgress
                  style={{ margin: 10 }}
                  variant="determinate"
                  value={100}
                />
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader
              title="
              Buffer"
            />
            <WFace.WCardContent>
              <>
                <>
                  <WFace.WLinearProgress
                    style={{ margin: 10 }}
                    variant="buffer"
                    value={25}
                    valueBuffer={50}
                  />
                  <WFace.WLinearProgress
                    style={{ margin: 10 }}
                    variant="buffer"
                    value={50}
                    valueBuffer={60}
                  />
                  <WFace.WLinearProgress
                    style={{ margin: 10 }}
                    variant="buffer"
                    value={75}
                    valueBuffer={85}
                  />
                  <WFace.WLinearProgress
                    style={{ margin: 10 }}
                    variant="buffer"
                    value={100}
                    valueBuffer={100}
                  />
                </>
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>

        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader
              title="
              WTable"
            />
            <WFace.WCardContent>
              <>
                {" "}
                <WFace.WTable
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
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>

        <WFace.WGrid item xl={6} lg={6}>
          <WFace.WCard>
            <WFace.WCardHeader
              title="
              WChip"
            />
            <WFace.WCardContent>
              <>
                {" "}
                <>
                  <WFace.WChip label="Basic Chip" style={{ margin: 10 }} />
                  <WFace.WChip
                    avatar={<WFace.WAvatar>MB</WFace.WAvatar>}
                    label="Clickable Chip"
                    onClick={() => alert("Chip tıklandı")}
                    style={{ margin: 10 }}
                  />
                  <WFace.WChip
                    avatar={
                      <WFace.WAvatar>
                        <WFace.WIcon>face</WFace.WIcon>
                      </WFace.WAvatar>
                    }
                    label="Clickable Deletable Chip"
                    onClick={() => alert("Chip tıklandı")}
                    style={{ margin: 10 }}
                  />
                  <WFace.WChip
                    icon={<WFace.WIcon>face</WFace.WIcon>}
                    label="Clickable Deletable Chip"
                    onClick={() => alert("Chip tıklandı")}
                    style={{ margin: 10 }}
                  />
                  <WFace.WChip
                    label="Custom delete icon Chip"
                    onClick={() => alert("Chip tıklandı")}
                    deleteIcon={<WFace.WIcon>done</WFace.WIcon>}
                    style={{ margin: 10 }}
                  />
                  <WFace.WChip
                    avatar={<WFace.WAvatar>MB</WFace.WAvatar>}
                    label="Primary Clickable Chip"
                    clickable
                    color="primary"
                    deleteIcon={<WFace.WIcon>clear</WFace.WIcon>}
                    onDelete={() => alert("Delete tıklandı")}
                    style={{ margin: 10 }}
                  />
                  <WFace.WChip
                    icon={<WFace.WIcon>done</WFace.WIcon>}
                    label="Primary Clickable Chip"
                    clickable
                    color="primary"
                    deleteIcon={<WFace.WIcon>face</WFace.WIcon>}
                    style={{ margin: 10 }}
                  />
                  <WFace.WChip
                    avatar={
                      <WFace.WAvatar>
                        <WFace.WIcon>face</WFace.WIcon>
                      </WFace.WAvatar>
                    }
                    label="Deletable Secondary Chip"
                    color="secondary"
                    style={{ margin: 10 }}
                  />
                  <WFace.WChip
                    icon={<WFace.WIcon>face</WFace.WIcon>}
                    label="Deletable Secondary Chip"
                    color="secondary"
                    style={{ margin: 10 }}
                  />
                </>{" "}
              </>
            </WFace.WCardContent>
          </WFace.WCard>
        </WFace.WGrid>
    </WFace.WGrid>
  );
};
