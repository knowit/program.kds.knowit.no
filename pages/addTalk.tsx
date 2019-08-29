import Layout from "./components/Layout";
import '../styling/addTalkStyles.scss';
import withSpeakerAuth from '../helpers/withSpeakerAuth';
import React from 'react';
import { firestore, auth } from './../firebase';
import TagSelector from './components/TagSelector'
import SpeakersSelector from './components/SpeakersSelector'
import { fromString } from "long";
import { DH_NOT_SUITABLE_GENERATOR } from "constants";

interface IState {
    form: Form
}

class Form {
    name: string
    description: string
    outline: string
    type: string
    difficulty: string
    language: string
    tags: Array<string>
    speaker: null
    cospeakers: Array<any>
}

class AddTalk extends React.Component<any, IState> {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: "",
                description: "",
                outline: "",
                type: "Lightning talk",
                difficulty: "beginner",
                language: "norwegian",
                tags: [],
                speaker: null,
                cospeakers: []
            }
        };
    }
    addTalk() {
        const form = this.state.form;
        console.log(form.cospeakers);
        form.speaker = form.cospeakers[0].ref;
        form.cospeakers = form.cospeakers.splice(1).map(speaker => speaker.ref);

        firestore.collection('talks').add(form)
            .then(console.log)
            .catch(console.log);

    }

    updateForm(val: any, prop: string) {
        console.log(val);
        this.setState((prev) => {
            prev.form[prop] = val;

            return prev;
        });
    }

    render() {
        return (
            <div className="addTalk">
                <Layout>
                    <div className="content">
                        <div className="form">
                            <p>New Talk</p>
                            <label className="form-row-header">Name</label>
                            <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'name')} defaultValue={this.state.form.name} />

                            <label className="form-row-header">Short description</label>
                            <textarea className="form-row" cols={80} rows={10} onChange={(evt) => this.updateForm(evt.target.value, 'description')} defaultValue={this.state.form.description}></textarea>

                            <label className="form-row-header">Outline</label>
                            <textarea  className="form-row" cols={40} rows={5} onChange={(evt) => this.updateForm(evt.target.value, 'outline')} defaultValue={this.state.form.outline}></textarea>
                            <label className="form-row-header">Type</label>
                            <select className="form-row" onChange={(evt) => this.updateForm(evt.target.value, 'type')} defaultValue={this.state.form.type}>
                                <option value="Lightning talk">Lightning talk</option>
                                <option value="Short presentation">Short presentation</option>
                                <option value="Long presentation">Long presentation</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                            <label className="form-row-header">Difficulty level</label>
                            <select className="form-row" onChange={(evt) => this.updateForm(evt.target.value, 'difficulty')} defaultValue={this.state.form.difficulty}>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                            <label className="form-row-header">Language used</label>
                            <select className="form-row" onChange={(evt) => this.updateForm(evt.target.value, 'language')} defaultValue={this.state.form.language}>
                                <option value="english">English</option>
                                <option value="norwegian">Norwegian</option>
                                <option value="swedish">Swedish</option>
                            </select>
                            <label className="form-row-header">Speakers</label>
                            <SpeakersSelector className="form-row" value={this.state.form.cospeakers} onChange={(val) => this.updateForm(val, 'cospeakers')}></SpeakersSelector>
                            <label className="form-row-header">Tags</label>
                            <TagSelector className="form-row" value={this.state.form.tags} onChange={(val) => this.updateForm(val, 'tags')}></TagSelector>
                            <label className="form-row-header">Comment to organizers</label>
                            <textarea className="form-row" cols={40} rows={5}></textarea>

                            <button className="form-row" onClick={() => this.addTalk()} >New talk</button>
                        </div>
                    </div>
                </Layout>
            </div >
        );
    }
}

export default withSpeakerAuth(AddTalk, '/login');
