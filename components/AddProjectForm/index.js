import styled from "styled-components";
import { StyledButton } from "../styles";

export default function AddProjectForm({
  onCancel,
  handleAddProjectSubmit,
  handleChangeProjectStatus,
  handleChangeProjectFeeling,
}) {
  return (
    <>
      <ProjectForm onSubmit={(e) => handleAddProjectSubmit(e)}>
        <RowSection>
          <label htmlFor="status">status</label>
          <select id="status" onChange={(e) => handleChangeProjectStatus(e)}>
            <option>--status--</option>
            <option value="planning">Planning</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="hibernating">Hibernating</option>
          </select>
          <label htmlFor="happiness">Feeling</label>
          <select id="feeling" onChange={(e) => handleChangeProjectFeeling(e)}>
            <option>--feeling--</option>
            <option value="excited">Excited</option>
            <option value="happy">Happy</option>
            <option value="normal">Normal</option>
            <option value="bad">Bad</option>
          </select>
        </RowSection>
        <ColumnSection>Upload Photo here</ColumnSection>
        <ColumnSection>
          <label htmlFor="recipient">To</label>
          <input name="recipient" type="text" />
          <label htmlFor="size">Size</label>
          <input name="size" type="text" />
          <label htmlFor="gauge">Gauge</label>
          <input name="gauge" type="text" />
          <label htmlFor="needlesize">Needel Size</label>
          <input name="needlesize" type="text" />
          <label htmlFor="start">Start at</label>
          <input name="start" type="date" />
          <label htmlFor="end">End at</label>
          <input name="end" type="date" />
        </ColumnSection>
        <ColumnSection>Upload Pattern here</ColumnSection>

        <ColumnSection>
          <label htmlFor="brand">Brand</label>
          <input name="brand" type="text" />
          <label htmlFor="skeins">Skeins</label>
          <input name="skeins" type="text" />
          <label htmlFor="type">Type</label>
          <input name="type" type="text" />
          <label htmlFor="gramm">Gramm</label>
          <input name="gramm" type="text" />
          <label htmlFor="color">Color</label>
          <input name="color" type="text" />
          <label htmlFor="meter">Meter</label>
          <input name="meter" type="text" />
        </ColumnSection>
        <ColumnSection>
          <label htmlFor="note">Note</label>
          <textarea name="note" />
        </ColumnSection>
        <RowSection>
          <StyledButton type="cancel" onClick={onCancel}>
            Cancel
          </StyledButton>
          <StyledButton type="submit">Save</StyledButton>
        </RowSection>
      </ProjectForm>
    </>
  );
}
const ProjectForm = styled.form`
  position: absolute;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 80%;
  padding-bottom: 5rem;
`;
const RowSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;
`;
const ColumnSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;
