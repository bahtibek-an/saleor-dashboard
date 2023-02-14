import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@saleor/macaw-ui";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import ResponsiveTable from "../../../../components/ResponsiveTable/ResponsiveTable";
import { fetchCategories } from "../../../../http/productApi";
import { hideAppLoader, showAppLoader } from "../../../../store/appReducer/actions";

const useStyles = makeStyles(
    theme => ({
      [theme.breakpoints.up("md")]: {
        colName: {
          minWidth: 300,
        },
        colPrice: {
          width: 300,
        },
        colPublished: {
          width: 200,
        },
        colType: {
          width: 300,
        },
        colDate: {
          width: 200,
        },
      },
      colAttribute: {
        width: 200,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      colFill: {
        padding: 0,
        width: "100%",
      },
      colName: {
        wordBreak: "break-all",
        "&$colNameFixed": {
          width: 300,
        },
      },
      colAvatar: {
        wordBreak: "break-all",
      },
      colNameFixed: {},
      colNameHeader: {
        // marginLeft: AVATAR_MARGIN,
      },
      colNameWrapper: {
        display: "block",
      },
      colPrice: {
        textAlign: "right",
      },
      colPublished: {},
      colType: {
        minWidth: "300px",
        wordBreak: "break-all",
      },
      link: {
        cursor: "pointer",
      },
      table: {
        tableLayout: "fixed",
      },
      tableContainer: {
        overflowX: "scroll",
      },
      textLeft: {
        textAlign: "left",
      },
      textRight: {
        textAlign: "right",
      },
      productName: {
        cursor: "pointer",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      },
      width160: {
        width: "160px"
      }
    }),
    { name: "ProductList" },
);

const CategoriesList = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const categories = useSelector((state) => state.categories);

    return (
        <div className={classes.tableContainer}>
            <ResponsiveTable className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell
                            padding="checkbox"
                            // className={clsx(classes.cell, {
                            //     [classes.dragRows]: dragRows,
                            // })}
                        >
                            <Checkbox
                                // indeterminate={products && products.length > selected.length && selected.length > 0}
                                // onChange={() => toggleAll(items, selected)}
                                // checked={selected.length === products.length}
                                // onChange={toggleAll}
                            />
                        </TableCell>
                        <TableCell>Название категории</TableCell>
                        <TableCell className={classes.width160}>Подкатегории</TableCell>
                        <TableCell className={classes.width160}>Количество продуктов</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((category) => (
                    category.isParent && 
                    <TableRow key={category.id}>
                        <TableCell padding="checkbox">
                            <Checkbox/>
                        </TableCell>
                        <TableCell onClick={() => navigate(`/category/${category.id}`)}>
                            {category.name}
                        </TableCell>
                        <TableCell>
                            {category.children.length}
                        </TableCell>
                        <TableCell>
                            
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </ResponsiveTable>
        </div>
    );
}

export default CategoriesList;