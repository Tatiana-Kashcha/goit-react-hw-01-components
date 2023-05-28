import * as s from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <s.Section>
      <s.Container>
        {title && <h2>{title}</h2>}
        <s.List>
          <s.ListItems>
            <s.Id>{stats.id}</s.Id>
            <s.Label>{stats.label}</s.Label>
            <s.Percentage>{stats.percentage}%</s.Percentage>
          </s.ListItems>
        </s.List>
      </s.Container>
    </s.Section>
  );
};

// {
/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>; */
// }
