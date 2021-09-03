import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useDispatch} from "react-redux";
import {
    Button,
    TextField,
    Select,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
}));

const tags = ["fun", "programming", "health", "science"];
const postSchema = yup.object().shape({
    title: yup.string().required(),
    subtitle: yup.string().required(),
    content: yup.string().min(20).required(),
    tag: yup.mixed().oneOf(tags),
})

const AddPostForm = ({open, handleClose}) => {

    const dispatch  = useDispatch();

    const [file, setFile] = useState(null);
    const {register, handleSubmit, control, errors, reset} = useForm({
        resolver: yupResolver(postSchema)
    });

    const clearForm = () => {
        reset();
        setFile(null);
        handleClose();
    }

    const onSubmit = (data) => {
        console.log(data);
        //dispatch create post action
        //dispatch(createPost());
        clearForm();
    }

    const classes = useStyles();
    return (
        <Dialog open={open} openClose={handleClose}>
            <DialogTitle>Yeni Yazı Oluştur</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Yeni bir yazı eklemek için aşağıdaki formu doldurun
                </DialogContentText>

                <div className={classes.root}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="title"
                            label="Başlık"
                            name="title"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors && errors.title ? true : false}
                            fullWidth
                        />
                        <TextField
                            id="subtitle"
                            label="Alt Başlık"
                            name="subtitle"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors && errors.subtitle ? true : false}
                            fullWidth
                        />
                        <Controller
                            as={
                                <Select
                                    input={<Input/>}
                                    className={classes.textField}
                                    fullWidth>
                                    {
                                        tags.map((tag, index) => (
                                            <MenuItem key={index} value={tag}>
                                                {tag}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            }
                            name="tag"
                            control={control}
                            error={errors && errors.tag ? true : false}
                            defaultValue={tags[0]}
                        />
                        <TextField
                            id="content"
                            label="İçerik"
                            name="content"
                            multiline
                            rows={4}
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors && errors.content ? true : false}
                            fullWidth
                        />

                        <FileBase64 multiple={false} onDone={({base64}) => setFile(base64)}/>
                    </form>
                </div>
            </DialogContent>

            <DialogActions>
                <Button color="inherit" onClick={clearForm}>
                    Vazgeç
                </Button>
                <Button variant="outlined" type="submit" color="primary" onClick={() => handleSubmit(onSubmit) ()}>
                    Yayınla
                </Button>
            </DialogActions>

        </Dialog>
    );
};

export default AddPostForm;
