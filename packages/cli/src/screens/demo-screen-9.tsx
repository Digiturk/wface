import React, { useEffect, useState } from "react";
import * as WFace from "@wface/components";

export const DemoScreen9 = (props) => {
  return (
    <>
      <WFace.WCard elevation={1}>
        <WFace.WCardHeader title="Card Title" subheader="Card Subheader" />
        <WFace.WCardContent>
          <>
            <WFace.WGrid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <WFace.WGrid item xs={4}>
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
              </WFace.WGrid>

              <WFace.WGrid item xs={4}>
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
              </WFace.WGrid>
              <WFace.WGrid item xs={4}>
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
              </WFace.WGrid>
              <WFace.WGrid item xs={4}>
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
              </WFace.WGrid>
              <WFace.WGrid item xs={4}>
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
              </WFace.WGrid>

              <WFace.WGrid item xs={4}>
                <WFace.WCheckbox label="Checkbox 1" checked />
                <WFace.WCheckbox label="Checkbox 2" checked />
              </WFace.WGrid>
            </WFace.WGrid>
                 <div style={{display:"flex",justifyContent:"right"}}>  <WFace.WButton
              style={{
              
                margin: 10,
                paddingTop: 11,
                paddingBottom: 11,
                paddingRight: 49,
                paddingLeft: 49,
                backgroundColor: "#3e5273"
              }}
              variant="contained"
            >
              Contained
            </WFace.WButton></div>
          
          </>
          <div style={{}}>
          <WFace.WNotificationBar text="Bu bir hata mesajıdır." type="error"/></div>
          <WFace.WGrid item lg={6} md={6} sm={6}>
            <WFace.WCard>
              <WFace.WCardHeader title="FORM-VALİDASYON" />
              <WFace.WCardContent>
                <>
                  <WFace.WTable
                    title="Basic Tree Data Preview"
                    data={[
                      {
                        id: 1,
                        name: "a",
                        surname: "Baran",
                        birthYear: 1987,
                        birthCity: 63,
                        sex: "Male",
                        type: "adult"
                      },
                      {
                        id: 2,
                        name: "b",
                        surname: "Baran",
                        birthYear: 1987,
                        birthCity: 34,
                        sex: "Female",
                        type: "adult",
                        parentId: 1
                      },
                      {
                        id: 3,
                        name: "c",
                        surname: "Baran",
                        birthYear: 1987,
                        birthCity: 34,
                        sex: "Female",
                        type: "child",
                        parentId: 1
                      },
                      {
                        id: 4,
                        name: "d",
                        surname: "Baran",
                        birthYear: 1987,
                        birthCity: 34,
                        sex: "Female",
                        type: "child",
                        parentId: 3
                      },
                      {
                        id: 5,
                        name: "e",
                        surname: "Baran",
                        birthYear: 1987,
                        birthCity: 34,
                        sex: "Female",
                        type: "child"
                      },
                      {
                        id: 6,
                        name: "f",
                        surname: "Baran",
                        birthYear: 1987,
                        birthCity: 34,
                        sex: "Female",
                        type: "child",
                        parentId: 5
                      }
                    ]}
                    columns={[
                      { title: "Adı", field: "name" },
                      { title: "Soyadı", field: "surname" },
                      { title: "Cinsiyet", field: "sex" },
                      { title: "Tipi", field: "type", removable: false },
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
                    parentChildData={(row, rows) =>
                      rows.find((a) => a.id === row.parentId)
                    }
                    actions={[
                      {
                        icon: "save",
                        tooltip: "Save User",
                        onClick: (event, rowData) =>
                          alert("You saved " + rowData.name)
                      },
                      (rowData) => ({
                        icon: "delete",
                        tooltip: "Delete User",
                        onClick: (event, rowData) =>
                          confirm("You want to delete " + rowData.name),
                        disabled: rowData.birthYear < 2000
                      })
                    ]}
                    options={{
                      actionsColumnIndex: -1
                    }}
                  />
                </>
              </WFace.WCardContent>
            </WFace.WCard>
          </WFace.WGrid>
        </WFace.WCardContent>
      </WFace.WCard>
    </>
  );
};
