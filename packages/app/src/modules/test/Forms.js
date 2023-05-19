import {Button} from "@dhis2/ui";
import {DHIS2ValueTypes} from "@scorecard/shared";
import {map} from "lodash";
import React, {useRef} from "react";
import CustomForm from "../../../../../shared/components/src/CustomForm";
import {FormFieldModel} from "../../../../../shared/components/src/CustomForm/models";

export default function ExampleForms() {
    const fields = [
        ...map(
            Object.values(DHIS2ValueTypes),
            ({name, formName}) =>
                new FormFieldModel({
                    id: name,
                    name,
                    formName,
                    valueType: name,
                    mandatory: true,
                    min: 5,
                    max: 50,
                })
        ),
    ];

    const ref = useRef(HTMLFormElement);

    return (
        <div style={{width: "25%"}}>
            <CustomForm formReference={ref} onSubmit={console.log} fields={fields}/>
            <Button primary onClick={ref.current.requestSubmit}>
                Submit
            </Button>
        </div>
    );
}
