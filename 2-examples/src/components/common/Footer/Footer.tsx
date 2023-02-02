interface IProps {} ;
const Footer : React.FC <IProps> = () => {
    return (
        <footer>
        <div className="div_footer">
          <p>
            This web page is a part of a demonstration of fluid web design made
            by www.w3schools.com. Resize the browser window to see the content
            response to the resizing.
          </p>
        </div>
      </footer>
    );
};
export default Footer;